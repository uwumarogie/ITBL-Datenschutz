import { baseUrl } from "@/util/global";
import * as z from "zod";

const userSchema = z.object({
  name: z.string(),
  score: z.number(),
});

export const leaderboardSchema = z.array(userSchema);

export type LeaderboardEntry = z.infer<typeof leaderboardSchema>;

export async function getLeaderboardData(gameCode: string) {
  const response = await fetch(`/api/leaderboard`, {
    method: "POST",
    body: JSON.stringify({ gameCode: gameCode }),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 1,
    },
  });

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`Failed to fetch leaderboard data: ${response.statusText}`);
  }
}

export function extractScore(achievement: { [key: string]: number | null }) {
  return Object.entries(achievement)
    .filter(([key, value]) => key.endsWith("Score") && value !== null)
    .reduce((total, [, value]) => total + value!, 0);
}

export function capitalizeName(str: string) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
