"use client";

import { useRouter } from "next/navigation";
import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import { InstagramLogo, Lightbulb, ListDashes } from "@phosphor-icons/react";

const title = "Phishing";
const description =
  "In diesem Modul lernst du, wie du Phishing-Angriffe auf sozialen Medien erkennst und vermeidest. Dabei wird dir beigbracht wie du Fake Profile von realen Profilen unterscheiden kannst und wie du dich verhalten solltest, wenn du eins entdeckst.";
const entryPath = "/space/phishing/video";
const chapter: ModuleChapter[] = [
  {
    title: "Einführung",
    icon: <Lightbulb />,
    minutes: "6",
  },
  {
    title: "Wissenüberprüfung",
    icon: <ListDashes />,
    minutes: "5",
  },
  {
    title: "Fake Profile erkennen",
    icon: <InstagramLogo />,
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
        background="/phishing.png"
      />
    </div>
  );
}
