import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/database/connection";
import { achievements, users } from "@/server/database/schema";
import { and, eq } from "drizzle-orm";

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
      .select({
        id: achievements.id,
        isAchieved: achievements.isAchieved,
        username: users.userName,
      })
      .from(users)
      .innerJoin(achievements, eq(users.id, achievements.userId))
      .where(
        and(eq(users.gameCode, gameCode), eq(achievements.isAchieved, true)),
      );

    if (!userData || userData.length === 0) {
      console.error("No user data found for gameCode", gameCode);
      return new NextResponse("Error", {
        status: 404,
        statusText: "No user data found",
      });
    }

    const userAchievementCount = userData.reduce(
      (acc, user) => {
        acc[user.username] = (acc[user.username] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const leaderboardData = Object.entries(userAchievementCount)
      .map(([name, score]) => ({
        name,
        score,
      }))
      .sort((a, b) => b.score - a.score);

    return new NextResponse(JSON.stringify(leaderboardData), {
      status: 200,
      statusText: "leaderboard user data arrived",
    });
  } catch (error) {
    console.error("Error processing POST request", error);
    return new NextResponse("Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
