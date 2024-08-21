"use client";

import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import { Database, Lightbulb, Sparkle } from "@phosphor-icons/react";
import {useTranslations} from "next-intl";



export default function DataProcessing() {
  const t = useTranslations("datenverarbeitung")
  const entryPath = "/space/daten-verarbeitung/overview";
  const chapter: ModuleChapter[] = [
    {
      title: t("chapter1"),
      icon: <Lightbulb />,
      minutes: "5",
    },
    {
      title: t("chapter2"),
      icon: <Database />,
      minutes: "6",
    },

    {
      title: t("chapter3"),
      icon: <Sparkle />,
      minutes: "3",
    },
  ];
  return (
    <div className="relative h-full w-full flex flex-col overflow-y-auto">
      <ModuleIntro
        title={t("title")}
        description={t("description")}
        entryPath={entryPath}
        chapter={chapter}
        background="/data-processing.png"
      />
    </div>
  );
}
