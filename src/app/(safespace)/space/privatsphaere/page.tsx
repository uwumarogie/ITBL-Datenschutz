"use client";

import { useRouter } from "next/navigation";
import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import {
  HandSwipeRight,
  IdentificationCard,
  Info,
  Lightbulb,
  List,
} from "@phosphor-icons/react";

const title = "Privatsphäre";
const description =
  "In diesem Modul lernst du, was personenbezogene Daten sind. Außerdem wirst du einen Überblick darüber bekommen, wie wichtig es ist deine Privatsphäre zu schützen";
const entryPath = "/space/privatsphaere/overview";
const chapter: ModuleChapter[] = [
  {
    title: "Einführung",
    icon: <Lightbulb />,
    minutes: "3",
  },
  {
    title: "Quiz",
    icon: <List />,
    minutes: "4",
  },
  {
    title: "ID Scan",
    icon: <IdentificationCard />,
    minutes: "3",
  },
  {
    title: "Privat oder nicht?",
    icon: <HandSwipeRight />,
    minutes: "5",
  },
];

export default function DataProcessing() {
  const router = useRouter();

  return (
    <div className="relative h-full w-full flex flex-col">
      <ModuleIntro
        title={title}
        description={description}
        entryPath={entryPath}
        chapter={chapter}
        background="/privacy.png"
      />
    </div>
  );
}
