"use client";

import { DesktopNav } from "@/components/NavBar/DesktopNavigation/desktop-nav";
import { MobileNav } from "@/components/NavBar/MobileNavigation/mobile-nav";
import { PersistUserService } from "@/services/user/PersistUserService";
import { redirect, useRouter } from "next/navigation";
import React, { CSSProperties, useEffect, useState } from "react";
import Robot, { RobotExpression } from "@/components/robot/robot";
import Button from "@/components/button";
import AnimatedText from "@/components/animated/AnimatedText";
import clsx from "clsx";
import { useMessages } from "@/services/notfication/message-provider";
import { AchievementId } from "@/util/achievement-data";
import RobotIntroduction from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/robot-introduction";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [username, setUsername] = useState("");
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
      }

      const userService = new PersistUserService();

      try {
        const user = await userService.getUser();
        setUsername(user.userName);
      } catch (error) {
        console.error("User not found", error);
      }
    };
    fetchUserData().then();
  }, []);

  return (
    <div className="bg-blue-background h-screen bg-fixed relative">
      <span className="absolute top-4 right-14 text-white hidden text-sm sm:block">
        <span className="text-slate-400">Eingeloggt als:</span> {username}
      </span>
      <div className="flex justify-center h-reduced-safari sm:h-full px-3 pt-1 sm:py-11 sm:pr-8 sm:pl-0 flex-col sm:flex-row">
        <div className="hidden sm:block">
          <DesktopNav />
        </div>

        <div className="sm:hidden">
          <MobileNav />
        </div>

        <div className="flex flex-row justify-center grow min-w-[220px] overflow-hidden">
          <div className="bg-white rounded-3xl py-6 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
