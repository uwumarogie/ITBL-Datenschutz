import { NavButton, NavButtonType } from "@/components/NavButton";

const navButtons: Omit<NavButtonType, "number">[] = [
  { href: "/space/intro", isFinished: false },
  { href: "/space/passwort", isFinished: false },
  { href: "/space/privatsphäre", isFinished: false },
  { href: "/space/daten-verarbeitung", isFinished: false },
  { href: "/space/phishing", isFinished: false },
  { href: "/space/rechte", isFinished: false },
];

export function InlineNavigation() {
  return (
    <div className="flex flex-row space-x-16">
      {navButtons.map(({ href, isFinished }, index) => (
        <NavButton
          key={index}
          number={index + 1}
          href={href}
          isFinished={isFinished}
        />
      ))}
    </div>
  );
}
