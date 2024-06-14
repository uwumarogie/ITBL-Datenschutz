"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import { GameController, Info, Lightbulb } from "@phosphor-icons/react";

const title = "Datenverarbeitung";
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolore commodi commodo veniam imperdiet nihil iusto gubergren, in facilisis mazim nam dolores mazim dolore est eros iure doming culpa. 
Nisi sadipscing elitr. Euismod dolores accumsan.`;
const entryPath = "/space/daten-verarbeitung/kapitel1";
const chapter: ModuleChapter[] = [
  {
    title: "Einführung",
    icon: <Lightbulb />,
    minutes: "5",
  },
  {
    title: "Werde zum Recommender Algorithmus",
    icon: <GameController />,
    minutes: "15",
  },
  {
    title: "Weiterführende Materialien",
    icon: <Info />,
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
        background="/data-processing.png"
      />
    </div>
  );
}
