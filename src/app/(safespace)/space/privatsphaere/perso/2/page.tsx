"use client";
import { useState } from "react";
import PersoComponent, { CheckboxData } from "../perso";

export default function Perso() {
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
  ]);

  return (
    <PersoComponent
      checkboxes={checkboxes}
      imgSrc="/id-back.png"
      setCheckboxes={setCheckboxes}
      hint='"Personenbezogene Daten sind alle Informationen, die sich auf
      eine identifizierte oder identifizierbare lebende Person beziehen.
      Verschiedene Teilinformationen, die gemeinsam zur Identifizierung
      einer bestimmten Person führen können, stellen ebenfalls
      personenbezogene Daten dar."'
      title="Finde alle personenbezogenen Daten, die sich auf der Vorderseite
      eines Ausweis befinden"
      description="Klicke alle Felder auf dem Ausweis an, die personenbezogen sind"
      nextPageHref="/space/privatsphaere"
    />
  );
}
