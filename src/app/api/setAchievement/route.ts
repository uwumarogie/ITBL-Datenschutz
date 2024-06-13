import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { achievements, users } from "@/server/database/schema";
import { eq } from "drizzle-orm";
import { db } from "@/server/database/connection";
import { AchievementId } from "@/util/achievement-data";

const requestSchema = z.object({
  userId: z.number(),
  achievementId: z.nativeEnum(AchievementId),
  unlocked: z.boolean(),
});

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();
    const { userId, achievementId, unlocked } =
      requestSchema.parse(requestData);
    const userData = await db.select().from(users).where(eq(users.id, userId));

    if (userData.length === 0) {
      return new NextResponse("User not found", {
        status: 404,
        statusText: "User not found",
      });
    }

    await db.insert(achievements).values({
      userId: userId,
      isAchieved: unlocked,
      achievementEnum: achievementId,
    });

    return new NextResponse("Achievement set", {
      status: 200,
      statusText: "Achievement set",
    });
  } catch (error) {
    console.error("Error setting achievement:", error);

    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid request data", {
        status: 400,
        statusText: "Invalid request data",
      });
    }

    return new NextResponse("Internal Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
