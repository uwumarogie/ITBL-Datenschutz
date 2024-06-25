import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/database/connection";
import { achievements, users } from "@/server/database/schema";
import { and, eq, sql } from "drizzle-orm";

type UserData = {
  username: string;
  score: number;
};

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
        username: users.userName,
        score: sql<number>`COUNT(${achievements.id})::int`.as("score"),
      })
      .from(users)
      .leftJoin(
        achievements,
        and(
          eq(users.id, achievements.userId),
          eq(achievements.isAchieved, true),
        ),
      )
      .where(eq(users.gameCode, gameCode))
      .groupBy(users.userName)
      .orderBy(sql`score DESC`);

    if (!userData || userData.length === 0) {
      console.error("No user data found for gameCode", gameCode);
      return new NextResponse("Error", {
        status: 404,
        statusText: "No user data found",
      });
    }

    const leaderboardData = userData.map((user: UserData) => ({
      name: user.username,
      score: user.score,
    }));

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
