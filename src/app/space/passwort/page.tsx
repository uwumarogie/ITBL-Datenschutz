"use client";

import { IntroductionText } from "@/components/introduction-text";
import { ActionCard } from "@/components/action-card";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Passwort() {
  const router = useRouter();
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col justify-start max-w-[700px]">
        <div className="flex justify-start p-3 lg:p-5 lg:mt-1">
          <IntroductionText
            headline="Passwortsicherheit"
            text="Starke Passwörter sind wichtig, um deine personenbezogenen Daten
          zu schützen. Je besser das Passwort, desto schwerer kann man dich
          Hacken. Aber was sind eigentlich wichtige Bestandteile eines sicheren
            Passworts und was sollte ich eher vermeiden?"
          />
        </div>

        <ActionCard
          title="Safety first"
          description="Lerne was ein gutes Passwort ausmacht"
          buttonText="Spiel starten"
          iconSrc="/safety-first.svg"
          primaryColor="#A9D6E5"
          secondaryColor="#2A6F97"
          titleColor="#014F86"
          onClick={() => router.push("passwort/quiz")}
        />
      </div>
      <Image
        src="/computer.svg"
        alt="passwort safety"
        width={400}
        height={400}
        className="m-auto"
      />
    </div>
  );
}
