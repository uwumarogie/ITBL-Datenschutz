"use client";
import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import { InstagramLogo, Lightbulb, ListDashes } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function DataProcessing() {
  const t = useTranslations('phishing.dataProcessing');
  
  const title = t("title");
  const description = t("description");
  const entryPath = "/space/phishing/video";
  const chapter: ModuleChapter[] = [
    {
      title: t("chapter.introduction.title"),
      icon: <Lightbulb />,
      minutes: "6",
    },
    {
      title: t("chapter.knowledgeCheck.title"),
      icon: <ListDashes />,
      minutes: "5",
    },
    {
      title: t("chapter.recognizeFakeProfiles.title"),
      icon: <InstagramLogo />,
      minutes: "5",
    },
  ];
  
  return (
    <div className="relative h-full w-full flex flex-col">
      <ModuleIntro
        title={title}
        description={description}
        entryPath={entryPath}
        chapter={chapter}
        background="/phishing.png"
      />
    </div>
  );
}
