"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function Privacy() {
  const router = useRouter();
  return (
    <div className="flex flex-col p-3 justify-between h-full">
      <div className="flex flex-col space-y-4 pb-2 max-w-[700px]">
        <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
          Was sind personenbezogene Daten?
        </h1>
        <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
          Personenbezogene Daten sind alle Informationen, die sich auf
          eine identifizierte oder identifizierbare lebende Person beziehen.
          Verschiedene Teilinformationen, die gemeinsam zur Identifizierung
          einer bestimmten Person führen können, stellen ebenfalls
          personenbezogene Daten dar.
        </span>
        <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
          Warum sollte ich die Daten schützen?
        </h1>
        <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
          Personenbezogene Daten können tiefgehende Einblicke in das Privatleben
          einer Person geben. Der Schutz dieser Daten bewahrt die individuelle
          Autonomie und verhindert ungewollte Einblicke in das persönliche
          Leben.
        </span>
      </div>
      <Button
        onClick={() => router.push("/space/privatsphaere/quiz")}
        className="max-w-[400px]"
      >
        Weiter zum Quiz
      </Button>
    </div>
  );
}
