"use client";
import { useState } from "react";
import PersoComponent, { CheckboxData } from "../perso";
import Button from "@/components/button";
import Robot from "@/components/robot/robot";

export default function Perso() {
  const [moduleStarted, setModuleStarted] = useState(false);
  const [instructionsRead, setInstructionsRead] = useState(false);
  const [checkboxes, setCheckboxes] = useState<CheckboxData[]>([
    {
      bottom: 77,
      left: 6,
      hoverText: "Logo der Europäischen Union",
      isChecked: false,
      isPersonenbezogen: false,
    },
    {
      bottom: 60,
      left: 10,
      hoverText: "Lichtbild",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 89,
      left: 65,
      hoverText: "Ausweisnummer",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 52,
      left: 57,
      hoverText: "Vorname",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 66,
      left: 70,
      hoverText: "Nachname",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 38,
      left: 39,
      hoverText: "Geburtsdatum",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 38,
      left: 83,
      hoverText: "Staatsangehörigkeit",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 29,
      left: 59,
      hoverText: "Geburtsort",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 18,
      left: 72,
      hoverText: "Zugangsnummer",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 7,
      left: 70,
      hoverText: "Unterschrift",
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 16,
      left: 39,
      hoverText: "Gültigkeitsdatum",
      isChecked: false,
      isPersonalData: false,
    },
  ]);

  return (
    <>
      {moduleStarted && instructionsRead ? (
        <PersoComponent
          checkboxes={checkboxes}
          imgSrc="/id-front.png"
          setCheckboxes={setCheckboxes}
          hint='"Personenbezogene Daten sind alle Informationen, die sich auf
      eine identifizierte oder identifizierbare lebende Person beziehen.
      Verschiedene Teilinformationen, die gemeinsam zur Identifizierung
      einer bestimmten Person führen können, stellen ebenfalls
      personenbezogene Daten dar."'
          title="Finde alle personenbezogenen Daten, die sich auf der Vorderseite
      eines Ausweis befinden"
          nextPageHref="/space/privatsphaere/perso/2"
        />
      ) : (
        <div className="p-2 flex flex-col items-center gap-4 lg:mt-8">
          {!moduleStarted && !instructionsRead ? (
            <>
              <Robot expression="resting" className="mb-6" />
              <span className="text-center max-w-[700px]">
                Jetzt spielen wir ein Spiel über Datenschutz. Eure Aufgabe ist
                es, herauszufinden, welche Daten eure Privatsphäre gefährden.
                Seid ihr bereit? Dann los!
              </span>
              <Button
                onClick={() => setModuleStarted(true)}
                className="max-w-[150px] lg:mt-4"
              >
                Weiter
              </Button>
            </>
          ) : (
            <>
              <Robot expression="resting" className="mb-6" />
              <span className="text-center max-w-[700px]">
                &quot;Das Spiel funktioniert so: Ihr seht eine Liste mit
                Datentypen und Kästchen daneben. Kreuze die Kästchen an, die
                privat bleiben sollten und nicht ins Internet gehören. Überlegt,
                welche Daten gefährlich sein könnten, wenn sie in die falschen
                Hände geraten.&quot;
              </span>
              <Button
                onClick={() => setInstructionsRead(true)}
                className="max-w-[150px] lg:mt-4"
              >
                Los geht's
              </Button>
            </>
          )}
        </div>
      )}
    </>
  );
}
