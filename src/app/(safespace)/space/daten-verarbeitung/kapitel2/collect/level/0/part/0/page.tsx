"use client";

import Robot, { RobotExpression } from "@/components/robot/robot";
import { CSSProperties, useEffect, useState } from "react";
import Button from "@/components/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import AnimatedText from "@/components/animated/animated-text";
import RobotIntroduction from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/robot-introduction";

export type State = {
  expression: RobotExpression;
  rotation: number;
  text: string;
  style?: CSSProperties | undefined;
};
const states: State[] = [
  {
    expression: "smiling",
    rotation: 0,
    text: "",
    style: {
      marginLeft: "calc(100% + 400px)",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Hallo! Da bin ich wieder.",
  },
  {
    expression: "resting",
    rotation: -0.4,
    text: "Nachdem du dich nun etwas mit Datenverarbeitung beschäftigt hast, hätte ich eine Aufgabe für dich.",
    style: {
      marginLeft: "100px",
      marginBottom: "30px",
    },
  },
  {
    expression: "resting",
    rotation: 0.6,
    text: "Mein Chef hat mich gebeten, das Social Media Profil von Marie anzusehen.",
    style: {
      marginRight: "150px",
      marginTop: "30px",
    },
  },
  {
    expression: "sad",
    rotation: -0.1,
    text: "Mein Arbeitsspeicher ist leider etwas voll heute, deswegen brauche ich deine Unterstützung.",
  },
  {
    expression: "smiling",
    rotation: 0.2,
    text: "Alle Infos aus Maries Profil werden wir später noch brauchen.",
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Lass uns also gleich mal loslegen! ",
    style: {
      width: "300px",
      height: "300px",
    },
  },
  {
    expression: "smiling",
    rotation: 1.5,
    text: "",
    style: {
      position: "absolute",
      marginLeft: "calc(100% + 400px)",
    },
  },
];

export default function DataProcessing0() {
  return (
    <RobotIntroduction
      states={states}
      href="/space/daten-verarbeitung/kapitel2/collect/level/0/part/1"
    />
  );
}
