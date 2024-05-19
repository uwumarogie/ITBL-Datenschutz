"use client";
import { useState } from "react";
import PersoComponent, { CheckboxData } from "../perso";

export default function Perso() {
  const [checkboxes, setCheckboxes] = useState<CheckboxData[]>([
    {
      bottom: 60,
      left: 10,
      hoverText: "Lichtbild",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 89,
      left: 65,
      hoverText: "Ausweisnummer",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 52,
      left: 57,
      hoverText: "Vorname",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 66,
      left: 70,
      hoverText: "Nachname",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 38,
      left: 39,
      hoverText: "Geburtsdatum",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 38,
      left: 83,
      hoverText: "Staatsangehörigkeit",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 29,
      left: 59,
      hoverText: "Geburtsort",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 18,
      left: 72,
      hoverText: "Zugangsnummer",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 7,
      left: 70,
      hoverText: "Unterschrift",
      isChecked: false,
      isPersonenbezogen: true,
    },
    {
      bottom: 16,
      left: 39,
      hoverText: "Gültigkeitsdatum",
      isChecked: false,
      isPersonenbezogen: false,
    },
  ]);

  return (
    <PersoComponent
      checkboxes={checkboxes}
      imgSrc="/id-front.png"
      setCheckboxes={setCheckboxes}
      hint="&quot;Personenbezogene Daten sind alle Informationen, die sich auf
      eine identifizierte oder identifizierbare lebende Person beziehen.
      Verschiedene Teilinformationen, die gemeinsam zur Identifizierung
      einer bestimmten Person führen können, stellen ebenfalls
      personenbezogene Daten dar.&quot;"
      title="Finde alle personenbezogenen Daten, die sich auf der Vorderseite
      eines Ausweis befinden"
      description="Klicke alle Felder auf dem Ausweis an, die personenbezogen sind"
      nextPageHref="/space/privatsphaere/perso/2"
    />
  );
}
