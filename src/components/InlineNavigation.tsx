import { NavButton, NavButtonType } from "@/components/NavButton";

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
    <div className="grid grid-cols-3 md:grid-cols-6 md:gap-x-32 gap-2 p-2 max-w-80">
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
