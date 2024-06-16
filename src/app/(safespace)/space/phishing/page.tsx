"use client";

import { useRouter } from "next/navigation";
import ModuleIntro, { ModuleChapter } from "@/components/module-intro";
import { InstagramLogo, Lightbulb, ListDashes } from "@phosphor-icons/react";

const title = "Phishing";
const description =
  "Du wirst im hier lernen wie du Fakeprofile von realen Profilen zu unterscheidest";
const entryPath = "/space/phishing/video";
const chapter: ModuleChapter[] = [
  {
    title: "Einführung",
    icon: <Lightbulb />,
    minutes: "5",
  },
  {
    title: "Wissenüberprüfung",
    icon: <ListDashes />,
    minutes: "15",
  },
  {
    title: "Fake Profile erkennen",
    icon: <InstagramLogo />,
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
