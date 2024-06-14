"use client";

import { IntroductionText } from "@/components/introduction-text";
import { ActionCard } from "@/components/action-card";
import Image from "next/image";
import ModuleIntro from "@/components/module-intro";

export default function Passwort() {
  return (
    <div className="flex flex-wrap items-start max-w-[1800px]">
      <ModuleIntro
        title="Passwortsicherheit"
        description="Lerne, wie du starke Passwörter erstellst und welche zu vermeiden sind. Erfahre, was ein gutes Passwort ausmacht und warum einfache Muster gefährlich sind. Entdecke, wie schwer es für Hacker ist, Passwörter zu knacken und warum regelmäßiges Ändern und die Verwendung unterschiedlicher Passwörter wichtig sind."
        entryPath="/space/passwort/quiz"
        background="/passwort.png"
        chapter={[
          {
            title: "Teste dein Wissen zu Passwörter",
            icon: "/white-tick-button.svg",
          },
          { title: "Bewerte Passwortstärken", icon: "/white-tick-button.svg" },
          { title: "Bilde starke Passwörter", icon: "/white-tick-button.svg" },
        ]}
      />
    </div>
  );
}

function OldIntro() {
  return (
    <>
      <div className="flex flex-col justify-start max-w-full xl:max-w-[calc(100%-400px)]">
        <div className="flex justify-start p-3 lg:p-5 lg:mt-1">
          <IntroductionText
            headline="Passwortsicherheit"
            text="Starke Passwörter sind wichtig, um deine personenbezogenen Daten
            zu schützen. Je besser das Passwort, desto schwerer kann man dich
            Hacken. Aber was sind eigentlich wichtige Bestandteile eines sicheren
            Passworts und was sollte ich eher vermeiden?"
          />
        </div>
        <div className="max-w-[300px] mx-3">
          <ActionCard
            title="Safety first"
            description="Lerne was ein gutes Passwort ausmacht"
            buttonText="Spiel starten"
            iconSrc="/safety-first.svg"
            primaryColor="#A9D6E5"
            secondaryColor="#2A6F97"
            titleColor="#014F86"
            redirectPath="/space/passwort/quiz"
          />
        </div>
      </div>
      <Image
        src="/computer.svg"
        alt="passwort safety"
        layout="responsive"
        width={400}
        height={400}
        className="m-auto min-w-[200px] max-w-[400px] flex-shrink-0"
      />
    </>
  );
}
