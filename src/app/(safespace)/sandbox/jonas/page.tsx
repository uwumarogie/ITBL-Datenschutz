"use client";

import ModuleIntro from "@/components/module-intro";
import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Sandbox() {
  const router = useRouter();
  const description =
    "Voluptas dolorem dolorem eveniet voluptas aut illo numquam. Vero non  ipsam maiores mollitia. Atque iusto sequi ut atque. Qui sequi in earum.\n" +
    "Reiciendis sit molestiae et iusto dolores expedita soluta. Et  ut nesciunt deleniti sed at soluta voluptatem harum. Qui sit et iusto.  Ullam debitis repellat porro quod quisquam omnis quia. Voluptatem eos  aut nesciunt qui qui. Illo nisi rerum neque voluptas.";
  const chapter = [
    {
      title: "Einführung",
      icon: "/white-tick-button.svg",
      minutes: "5",
    },
    {
      title: "Werde zum Recommender Algorithmus",
      icon: "/white-tick-button.svg",
      minutes: "5",
      onClick() {
        alert("You clicked the second entry!");
      },
    },
    {
      title: "Rückblick und weitere Materialien",
      icon: "/white-tick-button.svg",
      minutes: "5",
    },
  ];
  return (
    <div className="h-full w-full">
      <ModuleIntro
        title="Datenschutz, was ist das? - Intro & Überblick"
        description={description}
        chapter={chapter}
        background="/intro.png"
        entryPath="/space/passwort"
      />
    </div>
  );
}
