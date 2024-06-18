import { NavButton, NavButtonType } from "@/components/nav-button";
import { PersistUserService } from "@/services/user/PersistUserService";
import { CloudArrowDown, FishSimple, Lightbulb, LockKey, Password, Scales } from "@phosphor-icons/react";
import { useEffect } from "react";

const navButtons: Omit<NavButtonType, "number">[] = [
  { href: "/space/intro", isFinished: false, icon: <Lightbulb size={20}/>, description: "Modul 1 - Intro"},
  { href: "/space/passwort", isFinished: false, icon: <Password size={28}/>, description: "Modul 2 - Passwort"},
  { href: "/space/privatsphaere", isFinished: false, icon: <LockKey size={20}/>, description: "Modul 3 - Privatsphäre"},
  { href: "/space/daten-verarbeitung", isFinished: false, icon: <CloudArrowDown size={28}/>, description: "Modul 4 - Datenverarbeitung"},
  { href: "/space/phishing", isFinished: false, icon: <FishSimple size={28}/>, description: "Modul 5 - Phishing"},
  { href: "/space/rechte", isFinished: false, icon: <Scales size={28}/>, description: "Modul 6 - Meine Rechte"},
];

export async function InlineNavigation() {
  return (
    <div className="max-w-[700px] sm:pb-6">
      <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:justify-between sm:w-full">
        {navButtons.map(({ href, isFinished, icon, description }) => (
          <NavButton
            key={href}
            href={href}
            isFinished={isFinished}
            icon={icon}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
