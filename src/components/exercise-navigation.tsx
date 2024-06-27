"use client";

import ExerciseLink from "@/components/exercise-link";
import { PersistUserService } from "@/services/user/PersistUserService";
import { useEffect, useState } from "react";
import { AchievementId } from "@/util/achievement-data";

const exerciseLinksData = [
  {
    slug: "/space/intro",
    text: "Intro & Overview",
    imageSrc: "/intro.png",
    description:
      "Hier bekommst du einen generellen Überblick in das das Thema Datenschutz",
    unlocked: true,
  },
  {
    slug: "/space/passwort",
    text: "Passwort Sicherheit",
    imageSrc: "/passwort.png",
    description:
      "Hier lernst du was ein sicheres Passwort ausmacht und worauf du achten solltest, wenn du dir ein neues Passwort ausdenkst",
  },
  {
    slug: "/space/privatsphaere",
    text: "Privatsphäre",
    imageSrc: "/privacy.png",
    description:
      "Hier lernst du was genau personenbezogene Daten sind und warum du sie besser schützen solltest.",
  },
  {
    slug: "/space/daten-verarbeitung",
    text: "Daten Verarbeitung",
    imageSrc: "/data-processing.png",
    description:
      "Hier lernst du wie deine persönlichen Daten verarbeitet werden und was man alles aus ihnen herauslesen kann.",
  },
  {
    slug: "/space/phishing",
    text: "Phishing",
    imageSrc: "/phishing.png",
    description:
      "Hier lernst du, wie du Fake oder Phishing Profile von echten Profilen unterscheiden kannst.",
  },
  {
    slug: "/space/rechte",
    text: "Meine Rechte",
    imageSrc: "/rights.png",
    description:
      "Hier lernst du, welche Rechte du hast und wie du sie geltend machen kannst.",
  },
];

export function ExerciseNavigation() {
  const [modulesUnlocked, setModulesUnlocked] = useState(false);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const userService = new PersistUserService();
        const fetchedAchievements = await userService.getAchievement();
        const achievements = Array.isArray(fetchedAchievements)
          ? fetchedAchievements
          : [fetchedAchievements];

        if (
          achievements.find(
            (a) => a.achievementEnum == AchievementId.INTRO_FINISHED,
          )
        ) {
          setModulesUnlocked(true);
        }
      } catch {}
    }
    fetchAchievements().then();
  }, []);

  return (
    <div className="h-full">
      <h1 className="text-blue-background text-lg md:text-l lg:text-2xl xl:text-4xl max-h-[60px] font-extrabold mb-2 px-6">
        Sicher unterwegs in sozialen Medien
      </h1>
      <div className="flex flex-col h-reduced-40 justify-center overflow-y-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2 h-full">
          {exerciseLinksData.map(
            ({ slug, text, imageSrc, description, unlocked }, index) => (
              <ExerciseLink
                key={index}
                slug={slug}
                text={text}
                imageSrc={imageSrc}
                description={description}
                unlocked={unlocked || modulesUnlocked}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
