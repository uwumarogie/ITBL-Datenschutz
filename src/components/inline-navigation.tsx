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
    <div className="max-w-[700px] sm:pb-6">
      <div className="grid grid-cols-3 gap-6 sm:flex sm:flex-row sm:justify-between sm:w-full">
        {navButtons.map(({ href, isFinished }, index) => (
          <NavButton
            key={href}
            number={index + 1}
            href={href}
            isFinished={isFinished}
          />
        ))}
      </div>
    </div>
  );
}
