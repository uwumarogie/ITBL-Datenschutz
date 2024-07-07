"use client";

import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import { Database, Lightbulb, Sparkle } from "@phosphor-icons/react";

const title = "Datenverarbeitung";
const description = `In diesem Modul lernst du, wie Daten im digitalen Zeitalter gesammelt, verarbeitet und geschützt werden. Im Anschluss kannst du dein Wissen testen und es dann im Laufe des Kapitels anwenden. Ein besonderes Highlight dieses Moduls: Verstehe nicht nur, wie deine Daten gesammelt werden, sondern übernimm selbst die Rolle eines Recommender-Algorithmus. Starte jetzt, um mehr zu erfahren.`;
const entryPath = "/space/daten-verarbeitung/overview";
const chapter: ModuleChapter[] = [
  {
    title: "Infos & Quiz",
    icon: <Lightbulb />,
    minutes: "5",
  },
  {
    title: "Insta Inside",
    icon: <Database />,
    minutes: "6",
  },

  {
    title: "Werde zum Recommender Algorithmus",
    icon: <Sparkle />,
    minutes: "3",
  },
];

export default function DataProcessing() {
  return (
    <div className="relative h-full w-full flex flex-col overflow-y-auto">
      <ModuleIntro
        title={title}
        description={description}
        entryPath={entryPath}
        chapter={chapter}
        background="/data-processing.png"
      />
    </div>
  );
}
