import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { achievements } from "@/server/database/schema";
import { db } from "@/server/database/connection";
import { eq } from "drizzle-orm";

const requestSchema = z.object({
  userId: z.coerce.number(),
});

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();
    const { userId } = await requestSchema.parseAsync(request);

    const userArchievements = await db
      .select({
        achievementEnum: achievements.achievementEnum,
        isAchieved: achievements.isAchieved,
        userId: achievements.userId,
      })
      .from(achievements)
      .where(eq(achievements.userId, userId));

    if (!userArchievements || userArchievements.length === 0) {
      return new Response("Achievement not found", {
        status: 404,
        statusText: "Achievement not found",
      });
    }

    return new NextResponse(JSON.stringify(userArchievements), { status: 200 });
  } catch (error) {
    console.error("Error processing POST request", error);
    return new Response("Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
