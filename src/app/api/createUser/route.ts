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
  const requestData = await req.json();
  const { username, mode, gameCode } = requestSchema.parse(requestData);

  console.debug(username, mode, gameCode);

  try {
    const existingUser = await db
      .select({
        id: users.id,
        name: users.name,
      })
      .from(users)
      .where(eq(users.name, username));

    if (existingUser.length > 0) {
      return new NextResponse("User already exists", { status: 409 });
    }

    // Insert new user
    if (mode === "singlePlayer") {
      await db.insert(users).values({ name: username, gameCode: null });
    } else if (mode === "multiPlayer") {
      await db.insert(users).values({ name: username, gameCode: gameCode });
    }

    // Fetch the newly inserted user data
    const userData = await db
      .select({
        id: users.id,
        name: users.name,
      })
      .from(users)
      .where(eq(users.name, username));

    console.debug("userData", userData);

    if (!userData || userData.length === 0) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Insert achievements for the new user
    await db.insert(achievements).values({ userId: userData[0].id });

    return new NextResponse("User created successfully", { status: 201 });
  } catch (error: unknown) {
    console.error("Database error:", error);
    return new NextResponse(`Error: ${error}`, { status: 400 });
  }
}
