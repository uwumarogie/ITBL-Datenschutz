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
import {useTranslations} from "next-intl";
import {getMessages} from "next-intl/server";
import {useRawTranslations} from "@/services/messages/raw-translations-provider";

function useSteps() {
  const t = useTranslations("datenverarbeitung.overview.steps")
  return [
    {
      progress: 0.2,
      text: t("introduction"),
    },
    {
      progress: 0.7,
      text: t("collect"),
    },
    {
      progress: 0.9,
      text: t("process"),
    },
  ]
}

function useChapter() {
  const t = useTranslations("datenverarbeitung.overview.chapter")
  return [
    {
      unlockedBy: "STARTED",
      title: t("1.title"),
      description: t("1.description"),
      buttonText: t("1.buttonText"),
      iconSrc: "/safety-first.svg",
      primaryColor: "#A9D6E5",
      secondaryColor: "#2A6F97",
      titleColor: "#014F86",
      redirectPath: "/space/daten-verarbeitung/kapitel1",
    },
    {
      unlockedBy: "INTRODUCTION",
      title: t("2.title"),
      description: t("2.description"),
      buttonText: t("2.buttonText"),
      iconSrc: "/safety-first.svg",
      primaryColor: "#A9D6E5",
      secondaryColor: "#2A6F97",
      titleColor: "#014F86",
      redirectPath: "/space/daten-verarbeitung/kapitel2/collect/level/0/part/0",
    },
    {
      unlockedBy: "COLLECT",
      title: t("3.title"),
      description: t("3.description"),
      buttonText: t("3.buttonText"),
      iconSrc: "/safety-first.svg",
      primaryColor: "#A9D6E5",
      secondaryColor: "#2A6F97",
      titleColor: "#014F86",
      redirectPath: "/space/daten-verarbeitung/kapitel2/analyse/level/0/part/0",
    },
  ]
}

export default function DataProcessingOverview() {
  const [checkpoints, setCheckpoints] = useState<string[]>(["STARTED"]);
  const t = useTranslations("datenverarbeitung.overview")
  const steps = useSteps()
  const chapter = useChapter()

  const rawTranslations = useRawTranslations()
  console.log("Translations", rawTranslations.messages)

  function getProgress(): number {
    let progress = 0;
    if (checkpoints.includes("INTRODUCTION")) progress += 0.2;
    if (checkpoints.includes("COLLECT")) progress += 0.5;
    console.log("checkpoints", checkpoints);
    if (checkpoints.includes("ANALYSE")) progress += 0.3;
    return progress;
  }

  useAsyncEffect(async () => {
    const context = new PersistUserService();
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
            headline={t("title")}
            text={t("description")}
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
