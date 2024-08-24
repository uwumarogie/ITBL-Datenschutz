"use client";
import { NavButton, NavButtonType } from "@/components/nav-button";
import { achievements } from "@/server/database/schema";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import {
  CloudArrowDown,
  FishSimple,
  Lightbulb,
  LockKey,
  Password,
  Scales,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { getUserService } from "@/services/user/UserService";

type NavBtn = {
  href: string;
  id: AchievementId;
  icon: React.ReactNode;
  description: string;
};
const navButtons: Omit<NavBtn, "number">[] = [
  {
    href: "/space/intro",
    id: AchievementId.INTRO_FINISHED,
    icon: <Lightbulb size={20} />,
    description: "Modul 1 - Intro",
  },
  {
    href: "/space/passwort",
    id: AchievementId.PASSWORT_FINISHED,
    icon: <Password size={28} />,
    description: "Modul 2 - Passwort",
  },
  {
    href: "/space/privatsphaere",
    id: AchievementId.PRIVATSPHAERE_FINISHED,
    icon: <LockKey size={20} />,
    description: "Modul 3 - Privatsphäre",
  },
  {
    href: "/space/daten-verarbeitung",
    id: AchievementId.DATENVERARBEITUNG_FINISHED,
    icon: <CloudArrowDown size={28} />,
    description: "Modul 4 - Datenverarbeitung",
  },
  {
    href: "/space/phishing",
    id: AchievementId.PHISHING_FINISHED,
    icon: <FishSimple size={28} />,
    description: "Modul 5 - Phishing",
  },
  {
    href: "/space/rechte",
    id: AchievementId.MEINE_RECHTE_FINISHED,
    icon: <Scales size={28} />,
    description: "Modul 6 - Meine Rechte",
  },
];

export function InlineNavigation() {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(
    [],
  );

  useEffect(() => {
    const fetchAchievements = async () => {
      const userService = getUserService();
      const achievements = await userService.getAchievement();
      setUnlockedAchievements(achievements.map((a) => a.achievementEnum));
    };

    fetchAchievements();
  }, []);

  return (
    <div className="max-w-[700px] sm:pb-6">
      <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:justify-between sm:w-full">
        {navButtons.map(({ href, id, icon, description }) => (
          <NavButton
            key={href}
            href={href}
            isFinished={unlockedAchievements.includes(id)}
            icon={icon}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
