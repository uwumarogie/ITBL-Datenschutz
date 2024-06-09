import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { db } from "@/server/database/connection";
import { HighScoreEnum, highScores } from "@/server/database/schema";
import { and, eq } from "drizzle-orm";

const requestSchema = z.object({
  userId: z.coerce.number(),
  highScore: z.number(),
  highScoreEnum: z.nativeEnum(HighScoreEnum),
});

export async function POST(req: NextRequest) {
  const requestData = await req.json();
  const { userId, highScore, highScoreEnum } = requestSchema.parse(requestData);

  try {
    await db
      .update(highScores)
      .set({ highScore: highScore })
      .where(
        and(
          eq(highScores.userId, userId),
          eq(highScores.highScoreEnum, highScoreEnum),
        ),
      );
    return new NextResponse("Highscore set", {
      status: 200,
      statusText: "The highscore was set",
    });
  } catch (error) {
    console.error("Error setting highscore:", error);
    return new NextResponse("Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
