"use client";

import { passwordData } from "@/util/password-quiz-data";
import { IntroductionText } from "@/components/introduction-text";
import { PasswordStrengthDisplay } from "@/components/password-strength-display";

export default function PasswordStrength() {
  return (
    <div className="flex flex-col max-w-[1100px] px-2 lg:px-6 justify-start">
      <div className="flex justify-start mt-4">
        <IntroductionText
          headline="Bewerte die Stärke des Passworts"
          text="    Ein Passwort gilt nur als stark, wenn alle Kriterien erfüllt sind. Ist
        nur eine Bedingung falsch gilt das Passwort als mittel und ansonten als
        schwach."
        />
      </div>
      <PasswordStrengthDisplay passwords={passwordData} />
    </div>
  );
}
