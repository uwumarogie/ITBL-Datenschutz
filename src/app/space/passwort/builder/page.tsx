"use client"

import { InlineNavigation } from "@/components/inline-navigation";
import { SecurePasswordInput } from "@/components/secure-password-input";
import { ActionCard } from "@/components/action-card";
import { useRouter } from "next/navigation";

export default function Builder() {
  const router = useRouter();
  return (
    <div className="flex flex-col max-w-[1100px] px-6 justify-start">
      <div className="hidden lg:block">
        <InlineNavigation />
      </div>

        <div className="flex flex-col">
            <SecurePasswordInput/>
            <div className="flex-row space-x-5 scale-75 mb-36 items-start mr-96 hidden lg:flex">
                    <ActionCard
                        title="Passwort Profi"
                        description="Bewerte die Sicherheit unserer Passwörter"
                        iconSrc="/star.svg"
                        buttonText="Spiel starten"
                        primaryColor="#014F86"
                        secondaryColor="#2A6F97"
                        onClick={() => router.push("/space/passwort/strength")}
                    />
                    <ActionCard
                        title="Safety First"
                        description="Lerne was ein gutes Passwort ausmacht"
                        iconSrc="/star.svg"
                        buttonText="Erneut spielen"
                        primaryColor="#014F86"
                        secondaryColor="#2A6F97"
                        onClick={() => router.push("/sandbox/quiz")}
                    />
            </div>
        </div>
    </div>
  );
}
