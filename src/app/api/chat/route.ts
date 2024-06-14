import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  organization: "org-H8HMSGvHyJqYEafkknQNWq4Z",
  apiKey: process.env.OPENAI_KEY,
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  console.debug("message", messages);
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages,
    });
    return new NextResponse(JSON.stringify(response.choices[0].message), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error generating response", { status: 500 });
  }
}
