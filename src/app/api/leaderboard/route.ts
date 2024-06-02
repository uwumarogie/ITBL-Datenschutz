import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/database/connection";
import { achievements, users } from "@/server/database/schema";
import { eq } from "drizzle-orm";
import { extractScore, LeaderboardEntry } from "@/util/leaderboard";

export async function POST(req: NextRequest) {
  try {
    const { gameCode } = await req.json();

    if (gameCode === undefined) {
      return new NextResponse("Error", {
        status: 404,
        statusText: "gameCode is required. Your game code was undefined",
      });
    }

    const userData = await db
      .select()
      .from(users)
      .innerJoin(achievements, eq(users.id, achievements.userId))
      .where(eq(users.gameCode, gameCode));

    if (!userData || userData.length === 0) {
      console.error("No user data found for gameCode", gameCode);
      return new NextResponse("Error", {
        status: 404,
        statusText: "No user data found",
      });
    }

    const leaderboardData: LeaderboardEntry = userData.reduce(
      (acc: LeaderboardEntry, item) => {
        const totalScore = extractScore(item.achievements);
        if (totalScore === null) return acc;
        const normalizedScore = Math.round((totalScore / 140) * 10);
        acc.push({ name: item.users.name, score: normalizedScore });
        return acc;
      },
      [],
    );

    return new NextResponse(JSON.stringify(leaderboardData), {
      status: 200,
      statusText: "leaderboard data arrived",
    });
  } catch (error) {
    console.error("Error processing POST request", error);
    return new NextResponse("Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
