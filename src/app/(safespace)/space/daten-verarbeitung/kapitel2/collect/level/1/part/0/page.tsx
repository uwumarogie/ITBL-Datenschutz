"use client";

import Robot, { RobotExpression } from "@/components/robot/robot";
import { CSSProperties, useEffect, useState } from "react";
import Button from "@/components/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import AnimatedText from "@/components/animated/AnimatedText";
import RobotIntroduction from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/robot-introduction";

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
    text: "Hey! Ich bin AIris. Mein Boss hat mir aufgetragen, ein Paar Instagram Profile anzusehen und passende Werbung zu verteilen. ",
  },
  {
    expression: "resting",
    rotation: -0.4,
    text: "Ich bin ziemlich neu hier, vielleicht kannst du mir dabei helfen?",
    style: {
      marginLeft: "100px",
      marginBottom: "30px",
    },
  },
  {
    expression: "angry",
    rotation: 0.6,
    text: "Ich darf heute noch den ganzen Tag die Arbeit meines Chefs machen!!!",
    style: {
      marginRight: "150px",
      marginTop: "30px",
    },
  },
  {
    expression: "sad",
    rotation: -0.1,
    text: "Leider komme ich aus meiner Blechbüchse nicht so leicht raus.",
    style: {
      width: "150px",
      height: "150px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Egal. Lass uns loslegen!",
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
