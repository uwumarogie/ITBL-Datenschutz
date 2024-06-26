"use client";
import ModuleIntro from "@/components/module-intro";
import { Question, Textbox, ThumbsUp } from "@phosphor-icons/react";

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
            icon: <Question />,
          },

          { title: "Bilde starke Passwörter", icon: <Textbox /> },
          { title: "Bewerte Passwortstärken", icon: <ThumbsUp /> },
        ]}
      />
    </div>
  );
}
