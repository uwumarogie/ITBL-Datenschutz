"use client";
import { useState } from "react";
import PersoComponent, { CheckboxData } from "../perso";
import Robot from "@/components/robot/robot";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function Perso() {
  const router = useRouter();
  const [moduleFinished, setModuleFinished] = useState(false);
  const [checkboxes, setCheckboxes] = useState<CheckboxData[]>([
    {
      bottom: 88,
      left: 15,
      hoverText: "Augenfarbe",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 88,
      left: 68,
      hoverText: "Anschrift",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 78,
      left: 18,
      hoverText: "Größe",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 69,
      left: 22,
      hoverText: "Austellungsdatum",
      isChecked: false,
      isPersonalData: false,
    },
    {
      bottom: 58,
      left: 27,
      hoverText: "Ausstellende Behörde",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 44,
      left: 90,
      hoverText: "Personalausweislogo",
      isChecked: false,
      isPersonenbezogen: false,
    },
    {
      bottom: -3,
      left: 90,
      hoverText: "Bundesdruckerei Aufschrift",
      isChecked: false,
      isPersonenbezogen: false,
    },
  ]);

  return (
    <>
      {moduleFinished ? (
        <div className="p-2 flex flex-col items-center gap-4 lg:mt-8">
          <Robot expression="resting" className="mb-6" />
          <span className="text-center max-w-[700px]">
            &quot;Super gemacht! Du hast es drauf. Je mehr du weißt, was du
            geheim halten musst, desto sicherer bist du online. Deine nächste
            Challenge wird sein zu entscheiden ob die folgenden Daten
            personenbezogen sind oder nicht. Schaffst du eine perfekte Punktzahl
            und wirst zum Datenschutz-Meister?&quot;
          </span>
          <Button
            onClick={() => router.push("/space/privatsphaere/swipe")}
            className="max-w-[150px] lg:mt-4"
          >
            Starten
          </Button>
        </div>
      ) : (
        <PersoComponent
          checkboxes={checkboxes}
          imgSrc="/id-back.png"
          setCheckboxes={setCheckboxes}
          hint='"Personenbezogene Daten sind alle Informationen, die sich auf
      eine identifizierte oder identifizierbare lebende Person beziehen.
      Verschiedene Teilinformationen, die gemeinsam zur Identifizierung
      einer bestimmten Person führen können, stellen ebenfalls
      personenbezogene Daten dar."'
          title="Finde alle personenbezogenen Daten, die sich auf der Rückseite
      eines Ausweis befinden"
          nextPageHref="/space/privatsphaere"
          onFinish={setModuleFinished}
        />
      )}
    </>
  );
}
