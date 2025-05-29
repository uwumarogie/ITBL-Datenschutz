"use client";
import React, { useEffect, useState } from "react";
import {
  capitalizeName,
  getLeaderboardData,
  LeaderboardEntry,
} from "@/util/leaderboard";
import clsx from "clsx";
import { AchievementId } from "@/util/achievement-data";
import { redirect } from "next/navigation";
import { getUserService } from "@/services/user/UserService";

export default function Leaderboard() {
  const [gameCode, setGameCode] = useState("");
  const [username, setUsername] = useState("");
  const [leaderboardData, setLeaderboardData] =
    useState<LeaderboardEntry | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userService = getUserService();
        const user = await userService.getUser();
        setUsername(user.userName);
      } catch (error) {
        console.error("User not found", error);
      }
    };
    fetchUserData();

    if (typeof window !== "undefined" && window.localStorage) {
      const code = localStorage.getItem("gameCode");
      if (code) {
        setGameCode(code);
      } else {
        redirect("/space");
      }
    }
  }, []);

  useEffect(() => {
    if (gameCode) {
      const fetchLeaderboardData = async () => {
        try {
          const data = await getLeaderboardData(gameCode);
          setLeaderboardData(data);
        } catch (error) {
          console.error("NotFound fetching leaderboard data:", error);
        }
      };
      fetchLeaderboardData();
      const interval = setInterval(fetchLeaderboardData, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameCode]);

  return (
    <div className="px-6 mb-6 pt-2">
      <div className="flex justify-between">
        <h1 className="text-blue-background text-lg lg:text-4xl font-extrabold mb-6">
          Wer hat die meisten Erfolge?
        </h1>
        <span className="font-bold max-w-[100px] mt-[-10px]">
          Klassencode: {gameCode}
        </span>
      </div>
      {!leaderboardData ? (
        <>Loading ...</>
      ) : (
        <div className="w-full max-w-4xl space-y-2 max-h-[calc(100vh-230px)] lg:max-h-[calc(100vh-200px)] overflow-y-auto">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              className="flex justify-between mb-2 bg-module-blue rounded-r-3xl py-3 pr-6 pl-1"
              style={{
                width: `${(user.score * 100) / Object.keys(AchievementId).filter((key) => isNaN(Number(key))).length}%`,
              }}
            >
              <div className="flex gap-5 justify-between w-full min-w-max items-center">
                <span
                  className={clsx(
                    "text-blue-background font-bold text-2xl",
                    username === user.name && "text-orange-600 font-bold",
                  )}
                >
                  {user.score}
                </span>
                <span
                  className={clsx(
                    "text-blue-background font-bold w-max",
                    username === user.name && "text-orange-600 font-bold",
                  )}
                >
                  {capitalizeName(user.name)}{" "}
                  {username === user.name && (
                    <span className="text-blue-background font-medium">
                      {" "}
                      (Du)
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
