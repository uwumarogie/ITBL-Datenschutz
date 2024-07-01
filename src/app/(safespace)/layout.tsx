"use client";

import { DesktopNav } from "@/components/NavBar/DesktopNavigation/desktop-nav";
import { MobileNav } from "@/components/NavBar/MobileNavigation/mobile-nav";
import { PersistUserService } from "@/services/user/PersistUserService";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useMessages } from "@/services/notfication/message-provider";
import { AchievementId } from "@/util/achievement-data";

const modulesFinished: AchievementId[] = [
  AchievementId.INTRO_FINISHED,
  AchievementId.PASSWORT_FINISHED,
  AchievementId.PHISHING_FINISHED,
  AchievementId.PRIVATSPHAERE_FINISHED,
  AchievementId.MEINE_RECHTE_FINISHED,
  AchievementId.DATENVERARBEITUNG_FINISHED,
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [username, setUsername] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [isOverview, setIsOverview] = useState(false);
  const path = usePathname();
  const [masterQuizUnlocked, setMasterQuizUnlocked] = useState(false);
  const router = useRouter();
  const { addMessage } = useMessages();

  useEffect(() => {
    const fetchUserData = async () => {
      if (
        typeof window !== "undefined" &&
        window.localStorage &&
        !localStorage.getItem("userId")
      ) {
        router.replace("/");
        addMessage(
          "Du musst eingeloggt sein, um SafeSpace zu verwenden!",
          "error",
        );
        return;
      }

      const userService = new PersistUserService();

      try {
        const user = await userService.getUser();
        setUsername(user.userName);
      } catch (error) {
        console.error("User not found", error);
      }

      userService.getAchievement().then((data) => {
        const achievements = Array.isArray(data) ? data : [data];
        const unlocked = modulesFinished.every((a) =>
          achievements.find((achievement) => achievement.achievementEnum === a),
        );

        if (unlocked) {
          console.log("Master quiz unlocked");
          setMasterQuizUnlocked(true);
        }
      });
    };

    fetchUserData().then();
  }, []);

  useEffect(() => {
    const isOverview = path.split("/").length <= 2;
    setIsOverview(isOverview);
    setCollapsed(!isOverview);
  }, [path]);

  return (
    <div className="bg-blue-background h-screen bg-fixed relative">
      <span className="absolute top-4 right-14 text-white hidden text-sm sm:block opacity-50 hover:opacity-100">
        <span className="text-slate-400">Eingeloggt als:</span> {username}
      </span>
      <div className="flex h-reduced-safari sm:h-full px-3 pt-1 sm:py-11 sm:pr-8 sm:pl-0 flex-col sm:flex-row">
        <div
          className={clsx(
            "hidden sm:block transition-all flex-shrink-0",
            collapsed ? "w-40" : "w-[340px]",
          )}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(!isOverview)}
        >
          <DesktopNav isCollapsed={collapsed} masterQuizUnlocked={masterQuizUnlocked} />
        </div>

        <div className="sm:hidden">
          <MobileNav masterQuizUnlocked={masterQuizUnlocked} />
        </div>

        <div className="flex flex-row justify-center grow min-w-[220px] overflow-hidden z-10">
          <div className="bg-white rounded-3xl py-6 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
