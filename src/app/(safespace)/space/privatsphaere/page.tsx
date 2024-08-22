"use client";

import { useTranslations } from "next-intl";
import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import {
  HandSwipeRight,
  IdentificationCard,
  Lightbulb,
  List,
} from "@phosphor-icons/react";

export default function Privacy() {
  const t = useTranslations("privacy.moduleIntro");

  const chapter: ModuleChapter[] = [
    {
      title: t("chapter.introduction"),
      icon: <Lightbulb />,
      minutes: "3",
    },
    {
      title: t("chapter.quiz"),
      icon: <List />,
      minutes: "4",
    },
    {
      title: t("chapter.idScan"),
      icon: <IdentificationCard />,
      minutes: "3",
    },
    {
      title: t("chapter.privacyOrNot"),
      icon: <HandSwipeRight />,
      minutes: "5",
    },
  ];

  return (
    <div className="relative h-full w-full flex flex-col">
      <ModuleIntro
        title={t("title")}
        description={t("description")}
        entryPath="/space/privatsphaere/overview"
        chapter={chapter}
        background="/privacy.png"
      />
    </div>
  );
}
