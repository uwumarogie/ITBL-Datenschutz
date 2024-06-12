"use client";

import React, { useEffect, useState } from "react";
import {
  capitalizeName,
  getLeaderboardData,
  LeaderboardEntry,
} from "@/util/leaderboard";
import clsx from "clsx";
import { AchievementId } from "@/util/achievement-data";
import { GraduationCap, User } from "@phosphor-icons/react";
import { redirect } from "next/navigation";
import { PersistUserService } from "@/services/user/PersistUserService";

export default function Leaderboard() {
  const [gameCode, setGameCode] = useState("");
  const [userName, setUsername] = useState("");
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry | null>(null);

  useEffect(() => {
    const code = localStorage.getItem("gameCode");
    if (code) {
      setGameCode(code)
    } else {
      redirect("/space")
    }
  }, []);

  useEffect(() => {
    if (gameCode) {
      const fetchLeaderboardData = async () => {
        try {
          const data = await getLeaderboardData(gameCode);
          setLeaderboardData(data);
        } catch (error) {
          console.error("Error fetching leaderboard data:", error);
        }
      };
      fetchLeaderboardData()
      const interval = setInterval(fetchLeaderboardData, 10000)

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameCode]);

  return (
    <div className="px-6 pb-6 pt-2">
      <h1 className="text-blue-background text-4xl font-extrabold mb-6">
        Wer hat die meisten Erfolge?
      </h1>
      {!leaderboardData ? (
        <>Loading ...</>
      ) : (
        <div className="w-full max-w-4xl space-y-2">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              className="flex justify-between mb-2 bg-module-blue rounded-r-3xl py-3 pr-6 pl-1"
              style={{
                width: `${(user.score * 100) / Object.keys(AchievementId).filter(key => isNaN(Number(key))).length}%`,
              }}
            >
              <div className="flex gap-5 justify-between w-full min-w-max items-center">
                <span
                  className={clsx(
                    "text-blue-background font-bold text-2xl",
                    index === 0 && "text-orange-600 font-bold",
                  )}
                >
                  {user.score}
                </span>
                <span
                  className={clsx(
                    "text-blue-background font-bold w-max",
                    index === 0 && "text-orange-600 font-bold",
                  )}
                >
                  {capitalizeName(user.name)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
