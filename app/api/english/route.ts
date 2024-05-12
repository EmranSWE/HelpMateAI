import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import checkSubscription from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { GoogleGenerativeAI } from "@google/generative-ai";


// Gemini testing
const key = process.env.GEMINI_API_KEY;
// @ts-ignore
const genAI = new GoogleGenerativeAI(key);


export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages,history } = body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
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

    

    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const msg = messages[0].text;
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = await response.text();
    if (!isPro) {
      await incrementApiLimit();
    }
    return NextResponse.json(text);
  } catch (error) {
    console.log("[English_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
