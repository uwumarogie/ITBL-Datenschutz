"use client";

import { SecurePasswordInput } from "@/components/secure-password-input";
import { ActionCard } from "@/components/action-card";
import { useRouter } from "next/navigation";
import { HintCard } from "@/components/hint-card";

export default function Builder() {
  return (
    <div className="flex flex-row flex-wrap h-full">
      <div className="flex flex-col max-w-[1100px] px-2 justify-start mt-[-1rem] mb-4">
        <div className="flex flex-col xl:mr-8">
          <SecurePasswordInput />
          <div className="flex flex-row 2xl:pt-12">
            <div className="flex flex-row flex-wrap justify-center">
              <div className="max-w-[250px]">
                <ActionCard
                  title="Passwort Profi"
                  description="Bewerte die Sicherheit unserer Passwörter"
                  iconSrc="/key.svg"
                  buttonText="Spiel starten"
                  primaryColor="#A9D6E5"
                  secondaryColor="#2A6F97"
                  titleColor="#2A6F97"
                  redirectPath="/space/passwort/strength/"
                />
              </div>
              <div className="max-w-[250px]">
                <ActionCard
                  title="Safety First"
                  description="Lerne was ein gutes Passwort ausmacht"
                  iconSrc="/safety-first.svg"
                  buttonText="Erneut spielen"
                  primaryColor="#A9D6E5"
                  secondaryColor="#2A6F97"
                  titleColor="#2A6F97"
                  redirectPath="/space/passwort/quiz/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[400px] max-h-[450px] sm:max-h-[700px] mx-2 lg:mx-6 w-full h-full">
        <HintCard
          text="Was denkst du wie lange es dauern würde dein Passwort zu knacken?"
          buttonText="Lösung anzeigen"
          iconSrc="/smartphone-pw.png"
          hint="hint"
        />
      </div>
    </div>
  );
}
