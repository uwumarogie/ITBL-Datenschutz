import {
  capitalizeFirstLetterIfLowercase,
  getLeaderboardData,
  leaderboardSchema,
} from "@/util/leaderboard";
import clsx from "clsx";

export default async function Leaderboard() {
  const gameCode = "blwrbr";

  try {
    const leaderboardData = await getLeaderboardData(gameCode);
    const validatedData = leaderboardSchema.parse(leaderboardData);
    const sortedUsers = validatedData.sort(
      (userA, userB) => userB.score - userA.score,
    );

    return (
      <div className="p-6">
        <h1 className="text-blue-background text-4xl font-extrabold mb-10">
          Wer hat die meisten Erfolge?
        </h1>
        <div className="w-full max-w-md space-y-2">
          {sortedUsers.map((user, index) => (
            <div
              key={index}
              className="flex justify-between mb-2 bg-module-blue rounded-r-3xl p-4"
              style={{ width: `${user.score * 15}%` }}
            >
              <span
                className={clsx(
                  "flex justify-start text-blue-background font-bold",
                  index === 0 && "text-orange-600 font-bold",
                )}
              >
                {index + 1}. {capitalizeFirstLetterIfLowercase(user.name)}
              </span>
              <span
                className={clsx(
                  "flex justify-end text-blue-background font-bold",
                  index === 0 && "text-orange-600 font-bold",
                )}
              >
                {user.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    return <div>Error loading leaderboard data.</div>;
  }
}
