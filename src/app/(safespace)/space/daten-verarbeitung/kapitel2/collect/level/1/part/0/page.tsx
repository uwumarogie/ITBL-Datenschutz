"use client";

import Robot, { RobotExpression } from "@/components/robot/robot";
import { CSSProperties, useEffect, useState } from "react";
import Button from "@/components/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import AnimatedText from "@/components/animated/AnimatedText";
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
      marginLeft: "calc(-100% - 400px)",
      marginTop: "calc(-50%)",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Du hast schon mal gute Arbeit geleistet! Wir kennen uns nun schon gut mit Marie aus.",
  },
  {
    expression: "resting",
    rotation: -0.4,
    text: "Wir können aber noch viel mehr erfahren!",
    style: {
      marginLeft: "100px",
      marginBottom: "30px",
    },
  },
  {
    expression: "resting",
    rotation: 0.6,
    text: "Hast du dir angesehen, wer Maries posts geliket hat?",
    style: {
      marginRight: "150px",
      marginTop: "30px",
    },
  },
  {
    expression: "resting",
    rotation: -0.6,
    text: "Oder welchen Profilen Marie alles folgt? ",
    style: {
      marginRight: "-30px",
      marginTop: "px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Ich habe dir ein paar mehr Daten aus Maries Interaktionen geschickt.",
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Schauen wir doch gleich etwas genauer rein!",
    style: {
      width: "300px",
      height: "300px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
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
      href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/1"
    />
  );
}
