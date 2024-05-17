"use client";

import AchievementCard, {
  Achievement,
} from "@/components/Achievements/AchievementCard";
import { useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";

export default function Achievements() {
  const [progress, setProgress] = useState(0.6);

  const achievements: Achievement[] = [
    {
      title: "Datenschutz-Held",
      description:
        "Du bist jetzt in seinem Gebiet ein Profi. Kläre eine Person in deinem Umfeld auf und überwiege sie ein sicheres Passwort zu erstellen.",
      progress: false,
      icon: "rights.png",
    },
    {
      title: "Phishing-Fänger",
      description: "Erkenne und melde 2 Phishing-Versuche.",
      progress: true,
    },
    {
      title: "Werbe-Guru",
      description: "Erziele 5 perfekte Werbeangebote.",
      progress: true,
    },
  ].sort((a, b) => {
    if (a.progress && !b.progress) {
      return 1;
    } else if (b.progress && !a.progress) {
      return -1;
    } else {
      return 0;
    }
  });
  const steps = [
    {
      progress: 0.1,
      text: "Einstieg",
    },
    {
      progress: 0.8,
      text: "Master Quiz",
      icon: "star.svg",
    },
  ];
  return (
    <div className="px-8 overflow-y-auto h-full">
      <h1 className="text-sky-900 text-4xl font-extrabold mt-2 mb-2">
        Dein Fortschritt
      </h1>

      <div className="flex gap-4 pt-12 pb-8">
        <ProgressBar progress={progress} steps={steps} />
      </div>

      <h3 className="text-sky-background text-3xl font-bold text-sky-900 pb-8">
        Erfolge
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {achievements.map((a) => (
          <AchievementCard
            key={a.title}
            title={a.title}
            description={a.description}
            progress={a.progress}
          />
        ))}
      </div>
    </div>
  );
}
