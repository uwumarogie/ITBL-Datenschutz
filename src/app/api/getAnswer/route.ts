import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const requestSchema = z.object({
  situation: z.string(),
  userInput: z.string(),
  solution: z.string(),
});

export async function POST(rqq: NextRequest) {
  try {
    const _content = await rqq.json();
    const { situation, userInput, solution } = requestSchema.parse(_content);
    console.debug("Input", userInput);
    console.debug("Solution", solution);
    console.debug("question", solution);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: `
            Ist das eine Verletzung deiner Rechte?
            Das ist die Situation: ${situation}
            Die Frage ist: Ist das eine Verletzung deiner Rechte?
            Das ist der User input: ${userInput}
            Das ist die Lösung: ${solution}
            Bitte vergleiche den User input mit der Lösung und antworte mit "Ja" oder "nein" und fasse die Begründung kurz und bündig.
            Es sollt nicht länger sein als 3 Sätze.
            Wenn die Antwort Nein ist, bitte erkläre, warum und spreche den User mit DU an.
            Wenn die Antwort Ja ist, bitte erkläre, warum und spreche den User mit DU an.
            Bewerte die Übereinstimmung mit der richtigen Antwort auf einer Skala von 1 bis 10. 10 ist eindeutige Übereinstimmung.
            Gebe mir diesen Format aus und gebe immer ein score und eine Begründung, welches immer ein string ist,  an. Die Begründung soll einen Lerneffekt bei den Schülern auslösen.
            {score: number, reason: Begründung }
            `,
          },
        ],
        max_tokens: 100,
        temperature: 1,
      }),
    });

    if (!response.ok) {
      console.error("Failed to fetch answer", response);
      throw new Error("Failed to fetch answer");
    }
    const answer = await response.json();
    return new NextResponse(JSON.stringify(answer.choices[0].message.content), {
      status: 200,
      statusText: "answer received",
    });
  } catch (error) {
    console.error("Error processing POST request", error);
    return new NextResponse("Error", {
      status: 400,
      statusText: "Error",
    });
  }
}
