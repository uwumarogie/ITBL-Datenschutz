import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { highScores } from "@/server/database/schema";
import { and, eq } from "drizzle-orm";
import { db } from "@/server/database/connection";

const requestSchema = z.object({
  userId: z.string(),
  gameId: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const { userId, gameId } = requestSchema.parse(requestBody);

    const userIDINT = parseInt(userId, 10);
    const highScore = await db
      .select({
        highScore: highScores.highScore,
      })
      .from(highScores)
      .where(
        and(eq(highScores.userId, userIDINT), eq(highScores.gameId, gameId)),
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
