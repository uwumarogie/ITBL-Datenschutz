"use client";

import { IntroductionText } from "@/components/introduction-text";
import { ActionCard } from "@/components/action-card";
import Image from "next/image";
import { ProgressBar } from "@/components/progress-bar";
import React, { useEffect, useState } from "react";
import { PersistUserService } from "@/services/user/PersistUserService";
import { HighScoreEnum } from "@/server/database/schema";
import { useAsyncEffect } from "@/util/effect";
import clsx from "clsx";
import { AchievementId } from "@/util/achievement-data";
import {getUserService} from "@/services/user/UserService";

const steps = [
  {
    progress: 0.2,
    text: "Einführung",
  },
  {
    progress: 0.7,
    text: "Sammeln",
  },
  {
    progress: 0.9,
    text: "Verarbeiten",
  },
];

const chapter = [
  {
    unlockedBy: "STARTED",
    title: "1. Einführung - Was ist Datenverarbeitung?",
    description:
      "Was bedeutet Datenverarbeitung überhaupt? Ein kurzer Überblick.",
    buttonText: "Einführung starten",
    iconSrc: "/safety-first.svg",
    primaryColor: "#A9D6E5",
    secondaryColor: "#2A6F97",
    titleColor: "#014F86",
    redirectPath: "/space/daten-verarbeitung/kapitel1",
  },
  {
    unlockedBy: "INTRODUCTION",
    title: "2. Datensammlung",
    description:
      "Analysiere Social Media Profile und sammle möglichst viele Daten!.",
    buttonText: "Kapitel starten",
    iconSrc: "/safety-first.svg",
    primaryColor: "#A9D6E5",
    secondaryColor: "#2A6F97",
    titleColor: "#014F86",
    redirectPath: "/space/daten-verarbeitung/kapitel2/collect/level/0/part/0",
  },
  {
    unlockedBy: "COLLECT",
    title: "3. Datenverarbeitung",
    description:
      "Nutze deine analysierten Daten und wähle perfekt zugeschnittene Angebote aus!",
    buttonText: "Kapitel starten",
    iconSrc: "/safety-first.svg",
    primaryColor: "#A9D6E5",
    secondaryColor: "#2A6F97",
    titleColor: "#014F86",
    redirectPath: "/space/daten-verarbeitung/kapitel2/analyse/level/0/part/0",
  },
];

export default function DataProcessingOverview() {
  const [checkpoints, setCheckpoints] = useState<string[]>(["STARTED"]);

  function getProgress(): number {
    let progress = 0;
    if (checkpoints.includes("INTRODUCTION")) progress += 0.2;
    if (checkpoints.includes("COLLECT")) progress += 0.5;
    console.log("checkpoints", checkpoints);
    if (checkpoints.includes("ANALYSE")) progress += 0.3;
    return progress;
  }

  useAsyncEffect(async () => {
    const context = getUserService();
    await context.setAchievement(
      AchievementId.DATA_PROCESSING_CHECKPOINT_STARTED,
      true,
    );
    const achievements = await context.getAchievement();
    setCheckpoints((checkpoints) => [
      ...checkpoints,
      ...[...(Array.isArray(achievements) ? achievements : [achievements])]
        .filter((a) => a.achievementEnum.startsWith("#"))
        .map((a) =>
          a.achievementEnum.replace("#DATA_PROCESSING_CHECKPOINT_", ""),
        ),
    ]);
  }, []);

  return (
    <div className="flex flex-wrap items-start justify-start content-start w-full overflow-y-auto h-full">
      <div className="mt-4 w-full">
        <ProgressBar progress={getProgress()} steps={steps} />
      </div>
      <div className="flex flex-col justify-start max-w-full xl:max-w-[calc(100%-400px)] ">
        <div className="flex justify-start p-3 lg:p-5 lg:mt-1">
          <IntroductionText
            headline="Datenverarbeitung"
            text="Was genau ist Datenverarbeitung und was passiert dabei eigentlich? Diese Fragen werden in den folgenden Kapiteln beantwortet. Erweitere dein Wissen und wende es direkt in den Aufgaben dieses Moduls an."
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-3">
          {chapter.map((c) => (
            <div
              key={c.unlockedBy}
              className={clsx(
                !checkpoints.includes(c.unlockedBy) &&
                  "grayscale opacity-50 pointer-events-none",
              )}
            >
              <ActionCard {...c} />
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/data-processing.png"
        alt="passwort safety"
        layout="responsive"
        width={300}
        height={300}
        className="m-auto min-w-[200px] max-w-[300px] flex-shrink-0"
        priority
      />
    </div>
  );
}
