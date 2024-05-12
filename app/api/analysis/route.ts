import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import checkSubscription from "@/lib/subscription";
const key = process.env.GEMINI_API_KEY;
// @ts-ignore
const genAI = new GoogleGenerativeAI(key);

async function fileToGenerativePart(url: string, mimeType: string) {
  const response = await fetch(url);
  const imageData = await response.arrayBuffer();
  const base64Data = Buffer.from(imageData).toString("base64");
  return {
    inlineData: {
      data: base64Data,
      mimeType,
    },
  };
}



export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages, images } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    const imageParts= async ()=> {
      const imageUrl1 = images;
      const imagePart1 = await fileToGenerativePart(imageUrl1, "image/png");
    
      return [imagePart1];
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = messages[0].text;
    const imagePartsArray = await imageParts();

    const result = await model.generateContent([prompt, ...imagePartsArray]);
    const response = await result.response;
    const text = response.text();

    if (!isPro) {
            await incrementApiLimit();
          }
    return NextResponse.json(text);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}