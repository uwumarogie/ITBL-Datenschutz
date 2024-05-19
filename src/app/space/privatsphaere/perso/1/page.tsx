"use client";
import Button from "@/components/Button";
import Checkbox from "@/components/checkbox";
import Image from "next/image";
import { useState } from "react";

type CheckboxData = {
  bottom: number;
  left: number;
  hoverText: string;
  isChecked: boolean;
  isPersonenbezogen: boolean;
};

export default function Perso() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleCheckboxChange = (index: number) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox, i) =>
        i === index
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  const validateInput = () => {
    const correct = checkboxes.every(
      (checkbox) => checkbox.isChecked === checkbox.isPersonenbezogen
    );
    setIsCorrect(correct);
    if (correct) {
      setMessage("All correct!");
    } else {
      setMessage("Some checkboxes are incorrect. Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-full lg:px-6">
      <div>
        <div className="flex flex-col space-y-2 pb-4 max-w-[700px]">
          <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
            Finde alle personenbezogenen Daten, die sich auf der Vorderseite eines
            Ausweis befinden
          </h1>
          <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
            Klicke alle Felder auf dem Ausweis an, die ein personenbezogenes Datum
            sind
          </span>
        </div>
        <div className="relative w-full lg:max-w-[40vw]">
          <Image
            src="/id-front.png"
            alt="Personalausweis"
            layout="responsive"
            width={200}
            height={200}
            className="w-full h-auto"
          />
          {checkboxes.map(({ bottom, left, hoverText, isChecked }, index) => (
            <Checkbox
              key={index}
              className="absolute"
              style={{ bottom: `${bottom}%`, left: `${left}%` }}
              hoverText={hoverText}
              isChecked={isChecked}
              index={index}
              handleCheckboxChanged={() => handleCheckboxChange(index)}
            />
          ))}
        </div>
      </div>
      <Button
        className="m-4 w-24 h-11"
        onClick={validateInput}
      >
        Weiter
      </Button>
      {message && (
        <div className={`m-4 p-4 text-white ${isCorrect ? "bg-green-500" : "bg-red-500"}`}>
          {message}
        </div>
      )}
    </div>
  );
}
