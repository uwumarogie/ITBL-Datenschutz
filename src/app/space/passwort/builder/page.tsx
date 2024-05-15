"use client";

import { SecurePasswordInput } from "@/components/secure-password-input";
import { ActionCard } from "@/components/action-card";
import { useRouter } from "next/navigation";

export default function Builder() {
  const router = useRouter();
  return (
    <div className="flex flex-col max-w-[1100px] px-2 lg:px-6 justify-start">
      <div className="flex flex-col">
        <SecurePasswordInput />
        <div className="flex flex-row lg:pt-1 sm:pt-12">
          <div className="flex flex-col lg:flex-row gap-x-8">
            <div className="max-w-[200px] mx-auto">
              <ActionCard
                title="Passwort Profi"
                description="Bewerte die Sicherheit unserer Passwörter"
                iconSrc="/star.svg"
                buttonText="Spiel starten"
                primaryColor="#A9D6E5"
                secondaryColor="#2A6F97"
                titleColor="#2A6F97"
                redirectPath="/space/passwort/strength/"
              />
            </div>
            <div className="max-w-[200px] mx-auto">
              <ActionCard
                title="Safety First"
                description="Lerne was ein gutes Passwort ausmacht"
                iconSrc="/star.svg"
                buttonText="Erneut spielen"
                primaryColor="#A9D6E5"
                secondaryColor="#2A6F97"
                titleColor="#2A6F97"
                redirectPath="/space/passwort/quiz/"
                className="scale-[95%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
