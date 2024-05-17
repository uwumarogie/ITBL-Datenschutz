"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MobileSection } from "./MobileNavigation/MobileSection";
import { DesktopSection } from "./DesktopNavigation/DesktopSection";

export type Props = {
  setSection: (activeSection: SectionName) => void;
  activeSection: SectionName;
  sectionItems: SectionItem[];
};

export enum SectionName {
  ERKUNDEN,
  FORTSCHRITT,
  LEADERBOARD,
  CHATBOT,
}

type SectionItem = {
  sectionName: SectionName;
  srcActive: string;
  srcInactive: string;
  alt: string;
  href: string;
};

export function Section() {
  const path = usePathname();
  const getActiveSection = () => {
    if (path.startsWith("/space")) {
      return SectionName.ERKUNDEN;
    } else if (path.startsWith("/achievements")) {
      return SectionName.FORTSCHRITT;
    } else if (path.startsWith("/leaderboard")) {
      return SectionName.LEADERBOARD;
    } else if (path.startsWith("/chatbot")) {
      return SectionName.CHATBOT;
    }
    return SectionName.ERKUNDEN;
  };

  const [activeSection, setSection] = useState(getActiveSection);
  const sectionItems: SectionItem[] = [
    {
      sectionName: SectionName.ERKUNDEN,
      srcActive: "/section/discover-active.svg",
      srcInactive: "/section/discover.svg",
      alt: "Erkunden",
      href: "/space",
    },
    {
      sectionName: SectionName.FORTSCHRITT,
      srcActive: "/section/pace-active.svg",
      srcInactive: "/section/pace.svg",
      alt: "Fortschritt",
      href: "/achievements",
    },
    {
      sectionName: SectionName.LEADERBOARD,
      srcActive: "/section/leaderboard-active.svg",
      srcInactive: "/section/leaderboard.svg",
      alt: "Leaderboard",
      href: "/leaderboard",
    },
    {
      sectionName: SectionName.CHATBOT,
      srcActive: "/section/chatbot-active.svg",
      srcInactive: "/section/chatbot.svg",
      alt: "Chatbot",
      href: "/chatbot",
    },
  ];

  useEffect(() => {
    const activeSection = getActiveSection();
    setSection(activeSection);
  }, [path]);

  return (
    <div className="flex items-center sm:block">
      <div className="hidden sm:block">
        <DesktopSection
          setSection={setSection}
          activeSection={activeSection}
          sectionItems={sectionItems}
        />
      </div>

      <div className="sm:hidden">
        <MobileSection
          setSection={setSection}
          activeSection={activeSection}
          sectionItems={sectionItems}
        />
      </div>
    </div>
  );
}
