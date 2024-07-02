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
Situation: ${situation}
Frage: Ist das eine Verletzung deiner Rechte?
User-Input: ${userInput}
Lösung: ${solution}
Aufgabe: Vergleiche den User-Input mit der Lösung. Antwort mit "Ja" oder "Nein". Fasse die Begründung kurz und bündig zusammen.
Regeln:
1. Die Antwort sollte nicht länger als 3 Sätze sein.
2. Bei einem "Nein", erkläre kurz, warum nicht, und sprich den User direkt an.
3. Bei einem "Ja", erkläre kurz, warum, und sprich den User direkt mit "DU" an.
4. Bewerte die Übereinstimmung mit der richtigen Antwort auf einer Skala von 1 bis 10, wobei 10 eine eindeutige Übereinstimmung bedeutet.
5. Wenn die Antwort des Users mit der Lösung übereinstimmt, aber keine Begründung gegeben ist, vergib einen Score von 2.
6. Wenn die Antwort und Begründung vollständig mit der Lösung übereinstimmen, vergib einen Score von 10.
7. Wenn die Antwort falsch ist, vergib einen Score zwischen 1 und 5 basierend auf der Relevanz der Begründung.
Anleitung für die Begründung:
- Gebe einen kurzen Text, der einen Lerneffekt bei den Schülern auslöst. Maximal 4 Sätze.
Ausgabeformat:
{score: number, reason: string}
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
    console.log("Error processing POST request", error);
    console.log((error as Error).message);
    return new NextResponse("Error", {
      status: 400,
      statusText: "Error",
    });
  }
}
