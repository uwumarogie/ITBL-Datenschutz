import { db } from "@/server/database/connection";
import { achievements, users } from "@/server/database/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import * as z from "zod";

const requestSchema = z.object({
  username: z.string(),
  mode: z.string(),
  gameCode: z.string().nullable(),
});

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
      achievementEnum: "DATENSCHUTZ_HELD",
      isAchieved: true,
    });

    return NextResponse.json(
      { userData: userData },
      { status: 201, statusText: "User created successfully" },
    );
  } catch (error: unknown) {
    console.error("Database error:", error);
    return new NextResponse(`Error: ${error}`, { status: 400 });
  }
}
