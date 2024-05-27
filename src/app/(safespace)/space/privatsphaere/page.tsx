"use client";
import { ActionCard } from "@/components/action-card";
import { useRouter } from "next/navigation";

export default function Privacy() {
  const router = useRouter();
  return (
    <div className="flex flex-col p-3 justify-between h-full">
      <div className="flex flex-col space-y-2 pb-4 max-w-[700px]">
        <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
          Was sind personenbezogene Daten?
        </h1>
        <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
          &quot;Personenbezogene Daten sind alle Informationen, die sich auf
          eine identifizierte oder identifizierbare lebende Person beziehen.
          Verschiedene Teilinformationen, die gemeinsam zur Identifizierung
          einer bestimmten Person führen können, stellen ebenfalls
          personenbezogene Daten dar.&quot;
        </span>
      </div>
      <div className="flex flex-wrap pb-4">
        <div className="max-w-[300px]">
          <ActionCard
            title="Don't share"
            description="Findest du alle personenbezogenen Daten auf einem Ausweis?"
            buttonText="Starten"
            iconSrc="/id-card-icon.svg"
            primaryColor="#A9D6E5"
            secondaryColor="#2A6F97"
            redirectPath="/space/privatsphaere/perso/1"
            titleColor="#014F86"
          />
        </div>
        <div className="max-w-[300px]">
          <ActionCard
            title="Quiz"
            description="ALles wichtige über Privatsphäre wissen musst"
            buttonText="Starten"
            iconSrc="/eyes.svg"
            primaryColor="#A9D6E5"
            secondaryColor="#2A6F97"
            redirectPath="/space/privatsphaere/quiz"
            titleColor="#014F86"
          />
        </div>
      </div>
    </div>
  );
}
