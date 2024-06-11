"use client";

import AchievementCard from "@/components/Achievements/achievement-card";
import { useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { Achievement, AchievementData } from "@/util/achievement-data";
import { useUserData } from "@/services/user/UserServiceContext";

export default function Achievements() {
  const [progress, setProgress] = useState(0.6);
  const { userData } = useUserData();
  const achievements = AchievementData.achievements
    .map(
      (a) =>
        ({
          ...a,
          progress: userData.achievements[a.id] ?? false,
        }) as Achievement,
    )
    .sort((a, b) => {
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
            id={a.id}
            title={a.title}
            description={a.description}
            progress={a.progress}
          />
        ))}
      </div>
    </div>
  );
}
