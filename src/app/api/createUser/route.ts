import { db } from "@/server/database/connection";
import {
  achievements,
  HighScoreEnum,
  highScores,
  users,
} from "@/server/database/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import * as z from "zod";

const requestSchema = z.object({
  username: z.string(),
  mode: z.string(),
  gameCode: z.string().nullable(),
});

async function insertDefaultHighScores(userId: number) {
  // TODO: update the highScoreEnum if there is more highScores than the current one
  for (let highScore in HighScoreEnum) {
    await db.insert(highScores).values({
      userId: userId,
      highScore: 0,
      highScoreEnum: HighScoreEnum[highScore as keyof typeof HighScoreEnum],
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();
    const { username, mode, gameCode } = requestSchema.parse(requestData);

    console.log(username, mode, gameCode);
    const existingUser = await db
      .select({
        id: users.id,
        name: users.userName,
      })
      .from(users)
      .where(eq(users.userName, username));

    if (existingUser.length > 0) {
      return new NextResponse("User already exists", { status: 409 });
    }

    if (mode === "singlePlayer") {
      await db.insert(users).values({ userName: username, gameCode: null });
    } else if (mode === "multiPlayer") {
      await db.insert(users).values({ userName: username, gameCode: gameCode });
    }

    const userData = await db
      .select({
        id: users.id,
        name: users.userName,
        gameCode: users.gameCode,
      })
      .from(users)
      .where(eq(users.userName, username));

    if (!userData || userData.length === 0) {
      return new NextResponse("User not found", { status: 404 });
    }

    await db.insert(achievements).values({
      userId: userData[0].id,
      achievementEnum: "NULL",
      isAchieved: true,
    });
    await insertDefaultHighScores(userData[0].id);
    return NextResponse.json(
      { userData: userData },
      { status: 201, statusText: "User created successfully" },
    );
  } catch (error: unknown) {
    console.error("Database error:", error);
    return new NextResponse(`Error: ${error}`, { status: 400 });
  }
}
