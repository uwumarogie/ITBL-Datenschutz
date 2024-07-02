"use client";

import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import { Lightbulb, Question, Scales } from "@phosphor-icons/react";

const title = "Meine Rechte";
const description =
  "In diesem Modul lernst du die Beduetung der Datenschutzgrundverordnung im Bezug auf Social Media kennen und welche Rechte dir als Nutzer zustehen";
const entryPath = "/space/rechte/intro";
const chapter: ModuleChapter[] = [
  {
    title: "Einführung",
    icon: <Lightbulb />,
    minutes: "3",
  },
  {
    title: "DSGVO",
    icon: <Scales />,
    minutes: "8",
  },
  {
    title: "Wurde mein Recht verletzt?",
    icon: <Question />,
    minutes: "7",
  },
];

export default function Rights() {
  return (
    <div className="relative h-full w-full flex flex-col">
      <ModuleIntro
        title={title}
        description={description}
        entryPath={entryPath}
        chapter={chapter}
        background="/rights.png"
      />
    </div>
  );
}
