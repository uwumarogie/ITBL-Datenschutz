import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { users } from "@/server/database/schema";
import { db } from "@/server/database/connection";
import { eq } from "drizzle-orm";

const requestSchema = z.object({
  userId: z.coerce.number(),
});
export async function POST(req: NextRequest) {
  const requestBody = await req.json();

  const { userId } = requestSchema.parse(requestBody);

  try {
    const userData = await db
      .select({
        id: users.id,
        userName: users.userName,
        gameCode: users.gameCode,
      })
      .from(users)
      .where(eq(users.id, userId));

    return new NextResponse(JSON.stringify(userData[0]), {
      status: 200,
      statusText: "User data arrived",
    });
  } catch (error: unknown) {
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
