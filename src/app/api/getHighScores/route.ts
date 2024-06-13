import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { HighScoreEnum, highScores } from "@/server/database/schema";
import { and, eq } from "drizzle-orm";
import { db } from "@/server/database/connection";

const requestSchema = z.object({
  userId: z.coerce.number(),
  highScoreEnum: z.nativeEnum(HighScoreEnum),
});

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const { userId, highScoreEnum } = requestSchema.parse(requestBody);

    const highScore = await db
      .select({
        highScore: highScores.highScore,
      })
      .from(highScores)
      .where(
        and(
          eq(highScores.userId, userId),
          eq(highScores.highScoreEnum, highScoreEnum),
        ),
      );

    if (highScore.length === 0) {
      return new NextResponse("No highscores found", {
        status: 404,
        statusText: "No highscores found",
      });
    }

    return new NextResponse(JSON.stringify(highScore[0].highScore), {
      status: 200,
      statusText: "highscores data arrived",
    });
  } catch (error) {
    console.error("Error processing POST request", error);
    return new NextResponse("Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
