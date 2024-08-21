"use client";

import Robot, {RobotExpression} from "@/components/robot/robot";
import {CSSProperties, useEffect, useState} from "react";
import Button from "@/components/button";
import clsx from "clsx";
import {useRouter} from "next/navigation";
import AnimatedText from "@/components/animated/animated-text";
import RobotIntroduction from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/robot-introduction";
import {useTranslations} from "next-intl";

export type State = {
  expression: RobotExpression;
  rotation: number;
  text: string;
  style?: CSSProperties | undefined;
};

function useStates(): State[] {
  const t = useTranslations("datenverarbeitung.collect.level.0.part.0")
  return [
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
      text: t("robot1"),
    },
    {
      expression: "resting",
      rotation: -0.4,
      text: t("robot2"),
      style: {
        marginLeft: "100px",
        marginBottom: "30px",
      },
    },
    {
      expression: "resting",
      rotation: 0.6,
      text: t("robot3"),
      style: {
        marginRight: "150px",
        marginTop: "30px",
      },
    },
    {
      expression: "sad",
      rotation: -0.1,
      text: t("robot4"),
    },
    {
      expression: "smiling",
      rotation: 0.2,
      text: t("robot5"),
    },
    {
      expression: "smiling",
      rotation: 0,
      text: t("robot6"),
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
  ]
}

export default function DataProcessing0() {
  const states = useStates()
  return (
    <RobotIntroduction
      states={states}
      href="/space/daten-verarbeitung/kapitel2/collect/level/0/part/1"
    />
  );
}
