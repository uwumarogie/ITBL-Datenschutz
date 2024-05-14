"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MobileSection } from "./MobileNavigation/MobileSection";
import { DesktopSection } from "./DesktopNavigation/DesktopSection";

export type Props = {
  setSection: (activeSection: SectionName) => void;
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
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
  isActive: boolean;
};

export function Section() {
  const path = usePathname();
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const sectionItems: SectionItem[] = [
    {
      sectionName: SectionName.ERKUNDEN,
      srcActive: "/section/discover-active.svg",
      srcInactive: "/section/discover.svg",
      alt: "Erkunden",
      href: "/space",
      isActive: first,
    },
    {
      sectionName: SectionName.FORTSCHRITT,
      srcActive: "/section/pace-active.svg",
      srcInactive: "/section/pace.svg",
      alt: "Fortschritt",
      href: "/archievements",
      isActive: second,
    },
    {
      sectionName: SectionName.LEADERBOARD,
      srcActive: "/section/leaderboard-active.svg",
      srcInactive: "/section/leaderboard.svg",
      alt: "Leaderboard",
      href: "/leaderboard",
      isActive: third,
    },
    {
      sectionName: SectionName.CHATBOT,
      srcActive: "/section/chatbot-active.svg",
      srcInactive: "/section/chatbot.svg",
      alt: "Chatbot",
      href: "/chatbot",
      isActive: fourth,
    },
  ];

  const setSection = (activeSection: SectionName) => {
    if (activeSection === SectionName.ERKUNDEN) {
      setFirst(true);
      setSecond(false);
      setThird(false);
      setFourth(false);
    } else if (activeSection === SectionName.FORTSCHRITT) {
      setFirst(false);
      setSecond(true);
      setThird(false);
      setFourth(false);
    } else if (activeSection === SectionName.LEADERBOARD) {
      setFirst(false);
      setSecond(false);
      setThird(true);
      setFourth(false);
    } else if (activeSection === SectionName.CHATBOT) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(true);
    }
  };

  useEffect(() => {
    if (path.startsWith("/space")) {
      setSection(SectionName.ERKUNDEN);
    } else if (path === "/archievements") {
      setSection(SectionName.FORTSCHRITT);
    } else if (path === "/leaderboard") {
      setSection(SectionName.LEADERBOARD);
    } else if (path === "/chatbot") {
      setSection(SectionName.CHATBOT);
    }
  }, [path]);

  return (
    <div className="flex items-center sm:block">
      <div className="hidden sm:block">
        <DesktopSection
          setSection={setSection}
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          sectionItems={sectionItems}
        />
      </div>

      <div className="sm:hidden">
        <MobileSection
          setSection={setSection}
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          sectionItems={sectionItems}
        />
      </div>
    </div>
  );
}
