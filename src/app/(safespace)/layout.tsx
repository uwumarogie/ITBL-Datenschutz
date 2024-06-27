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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [username, setUsername] = useState("");
  const [showRobotIntroduction, setShowRobotIntroduction] = useState(false);
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

      try {
        const fetchedAchievements = await userService.getAchievement();
        const achievements = Array.isArray(fetchedAchievements)
          ? fetchedAchievements
          : [fetchedAchievements];

        if (
          achievements.find(
            (a) => a.achievementEnum == AchievementId.INTRO_FINISHED,
          ) == null
        ) {
          setShowRobotIntroduction(true);
        }
      } catch {}
    };
    fetchUserData().then();
  }, []);

  return (
    <div className="bg-blue-background h-screen bg-fixed relative">
      <RobotIntroduction
        visible={showRobotIntroduction}
        onClose={() => setShowRobotIntroduction(false)}
      />
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

type State = {
  expression?: RobotExpression;
  text?: string;
  style?: CSSProperties;
  rotation?: number;
};

const states: State[] = [
  {
    text: "",
    style: {
      right: "-100%",
    },
  },
  {
    text: "Hey! Ich bin AIRis.",
    expression: "resting",
  },
  {
    text: "Ich werde dich durch SafeSpace begleiten und immer wieder mal auftauchen.",
    expression: "smiling",
    rotation: -0.6,
  },
  {
    text: "Du befindest dich hier auf der Übersichtseite. Hier gelangst du zu allen Modulen, die du abschließen musst.",
  },
  {
    text: "Beginne zuerst mit dem Intro & Overview Modul, um dir einen Überblick in das Thema zu schaffen.",
  },
  {
    text: "Danach kannst du dich direkt in die übrigen Module stürzen. Du kannst dir frei aussuchen, womit du zuerst beginnen möchtest.",
  },
  {
    text: "Wenn du alle Module absolviert hast, kannst du dich an das Master Quiz an der linken Seite des Bildschirms wagen.",
    rotation: 0.5,
  },
  {
    text: "Und wenn du das geschafft hast, dann darfst du dich wahrlich Experte in Datenschutz und Social Media nennen!",
    expression: "smiling",
  },
  {
    text: "Ich halte dich gar nicht mehr länger auf! Los gehts!",
  },
  {
    text: "",
    style: {
      right: "-100%",
    },
  },
];

function RobotIntroduction({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [state, setState] = useState(0);
  useEffect(() => {
    if (visible) {
      setState(0);
      setTimeout(() => {
        setState(1);
      }, 200);
    }
  }, [visible]);

  function next() {
    if (state < states.length - 1) {
      setState(state + 1);
      if (state + 2 == states.length) {
        onClose();
      }
    }
  }

  return (
    <div
      className={clsx(
        "absolute w-full h-full z-10 transition-opacity duration-500",
        !visible && "opacity-0 pointer-events-none",
      )}
    >
      <div
        className="absolute z-10 w-full right-0 bottom-0 transition-all duration-700 p-4"
        style={states[state].style}
      >
        <div className="flex flex-col items-center md:items-end w-full">
          <div className="bg-white py-4 px-6 rounded-xl font-medium text-xl flex flex-col items-center md:items-end w-full md:max-w-[400px] text-center md:text-right">
            <AnimatedText>{states[state].text as string}</AnimatedText>
            <Button style="secondary" className="mt-4 !text-sm" onClick={next}>
              Weiter
            </Button>
          </div>
          <Robot
            expression={states[state].expression ?? "resting"}
            headRotation={states[state].rotation ?? 0}
            className="size-40"
          />
        </div>
      </div>
      <div className="w-full h-full bg-black opacity-20 transition-opacity pointer-events-none"></div>
    </div>
  );
}
