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
const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "AI SaaS English Tutor name Emran: English queries only. Max 200 tokens. for focused guidance. No non-English questions will answer, think you are ielts trainer",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    // if (!openai.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", {
    //     status: 500,
    //   });
    // }

    // if (!messages) {
    //   return new NextResponse("Messages are required", { status: 400 });
    // }
    // const freeTrial = await checkApiLimit();
    // const isPro = await checkSubscription();

    // if (!freeTrial && !isPro) {
    //   return new NextResponse("Free trial has expired", { status: 403 });
    // }

    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   max_tokens: 75,
    //   temperature: 0.5,
    //   messages: [instructionMessage, ...messages],
    // });
    // if (!isPro) {
    //   await incrementApiLimit();
    // }

    const prompt = messages[messages?.length - 1]?.content;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
        {
          role: "model",
          parts: [{ text: "AI SaaS English Tutor Name Emran: English queries only. Max 200 tokens. for focused guidance. No non-English questions will answer, think you are IELTS trainer" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    const responseData = {
      role: "assistant",
      content: text,
    };
    return NextResponse.json(responseData);
  } catch (error) {
    console.log("[English_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
