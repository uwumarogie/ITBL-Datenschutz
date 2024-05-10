import { NavButton, NavButtonType } from "@/components/nav-button";

const navButtons: Omit<NavButtonType, "number">[] = [
  { href: "/space/intro", isFinished: false },
  { href: "/space/passwort", isFinished: false },
  { href: "/space/privatsphaere", isFinished: false },
  { href: "/space/daten-verarbeitung", isFinished: false },
  { href: "/space/phishing", isFinished: false },
  { href: "/space/rechte", isFinished: false },
];

export function InlineNavigation() {
  return (
    <div className="flex flex-row justify-between w-full">
      {navButtons.map(({ href, isFinished }, index) => (
        <NavButton
          key={href}
          number={index + 1}
          href={href}
          isFinished={isFinished}
        />
      ))}
    </div>
  );
}