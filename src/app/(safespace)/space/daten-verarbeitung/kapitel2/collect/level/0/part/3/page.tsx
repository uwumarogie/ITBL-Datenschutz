"use client";

import {NodeImageProgram} from "@sigma/node-image";
import {useEffect, useMemo, useRef, useState} from "react";
import Graph from "graphology";
import Sigma from "sigma";
import forceAtlas2 from "graphology-layout-forceatlas2";
import {assignLayout} from "graphology-layout/utils";
import {circular, random} from "graphology-layout";
import {animateNodes} from "sigma/utils";
import forceLayout from "graphology-layout-force";
import ForceSupervisor from "graphology-layout-force/worker";
import Button from "@/components/button";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";
import AnimatedText from "@/components/animated/animated-text";
import {atRule} from "postcss";
import DataGraph, {
  DataGraphState,
} from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/data-graph";
import Robot from "@/components/robot/robot";
import clsx from "clsx";
import {useTranslations} from "next-intl";

const nodeFactor = () => ({
  x: Math.random(),
  y: Math.random(),
  size: 30,
  color: "#F97215",
});

const nodeAttr = () => ({
  x: Math.random(),
  y: Math.random(),
  size: 15,
  color: "#003A62",
});

function useStates(): DataGraphState[] {
  const t = useTranslations("datenverarbeitung.collect.level.0.part.3")
  return [
    {
      text: t("text_1"),
      addNodes: [
        {
          name: "user",
          attributes: {
            x: 0,
            y: 0,
            size: 60,
            label: t("label_1"),
            highlighted: true,
            color: "#FFFFFF",
            image: "/posts/profile_marie.png",
          },
        },
      ],
    },
    {
      text: t("text_2"),
      addNodes: [
        {
          name: "allgemein",
          attributes: { ...nodeFactor(), label: t("label_2") },
          edgeTo: "user",
        },
        {
          name: "schule",
          attributes: { ...nodeFactor(), label: t("label_3") },
          edgeTo: "user",
        },
      ],
    },
    {
      text: t("text_3"),
      addNodes: [
        {
          name: "musik",
          attributes: { ...nodeFactor(), label: t("label_13") },
          edgeTo: "user",
        },
      ],
    },
    {
      text: t("text_4"),
    },
    {
      text: t("text_5"),
      addNodes: [
        {
          name: "familie",
          attributes: { ...nodeFactor(), label: t("label_20") },
          edgeTo: "user",
        },
        {
          name: "ferienjob",
          attributes: { ...nodeFactor(), label: t("label_24") },
          edgeTo: "user",
        },
      ],
    },
    {
      text: t("text_6"),
      addNodes: [
        {
          name: "age",
          attributes: { ...nodeAttr(), label: t("label_4") },
          edgeTo: "allgemein",
        },
        {
          name: "wohnort",
          attributes: { ...nodeAttr(), label: t("label_5") },
          edgeTo: "allgemein",
        },
        {
          name: "aussehen",
          attributes: { ...nodeAttr(), label: t("label_6") },
          edgeTo: "allgemein",
        },
        {
          name: "follower",
          attributes: { ...nodeAttr(), label: t("label_7") },
          edgeTo: "allgemein",
        },
        {
          name: "following",
          attributes: { ...nodeAttr(), label: t("label_8") },
          edgeTo: "allgemein",
        },
        {
          name: "klasse",
          attributes: { ...nodeAttr(), label: t("label_9") },
          edgeTo: "schule",
        },
        {
          name: "schule-ort",
          attributes: {
            ...nodeAttr(),
            label: t("label_10"),
          },
          edgeTo: "schule",
        },
        {
          name: "situation-schule",
          attributes: { ...nodeAttr(), label: t("label_11") },
          edgeTo: "schule",
        },
        {
          name: "stress_schule",
          attributes: { ...nodeAttr(), label: t("label_12") },
          edgeTo: "schule",
        },
        {
          name: "fan",
          attributes: { ...nodeAttr(), label: t("label_14") },
          edgeTo: "musik",
        },
        {
          name: "konzert",
          attributes: { ...nodeAttr(), label: t("label_15") },
          edgeTo: "musik",
        },
        {
          name: "konzert_dortmund",
          attributes: { ...nodeAttr(), label: t("label_16") },
          edgeTo: "musik",
        },
        {
          name: "song_billie",
          attributes: { ...nodeAttr(), label: t("label_17") },
          edgeTo: "musik",
        },
        {
          name: "song_emotional",
          attributes: { ...nodeAttr(), label: t("label_18") },
          edgeTo: "musik",
        },
        {
          name: "song_sentimental",
          attributes: { ...nodeAttr(), label: t("label_19") },
          edgeTo: "musik",
        },
        {
          name: "schwester",
          attributes: { ...nodeAttr(), label: t("label_21") },
          edgeTo: "familie",
        },
        {
          name: "hund",
          attributes: { ...nodeAttr(), label: t("label_22") },
          edgeTo: "familie",
        },
        {
          name: "familienmensch",
          attributes: { ...nodeAttr(), label: t("label_23") },
          edgeTo: "familie",
        },
        {
          name: "sneaker_name",
          attributes: { ...nodeAttr(), label: t("label_25") },
          edgeTo: "ferienjob",
        },
        {
          name: "sneaker",
          attributes: { ...nodeAttr(), label: t("label_26") },
          edgeTo: "ferienjob",
        },
      ],
    },
    {
      text: t("text_7"),
    },
    {
      text: t("text_8"),
    },
    {
      text: t("text_9"),
    },
  ];
}

export default function DataProcessing3() {
  const [showRobot, setShowRobot] = useState(false);
  const t = useTranslations("datenverarbeitung.collect.level.0.part.3")
  const states = useStates()

  function onStateChange(state: number) {
    console.log(state);
    if (state == 6) {
      setShowRobot(true);
    }
  }

  return (
    <div className="w-full h-full relative">
      <div
        className={clsx(
          "absolute bottom-0 inline-flex flex-col py-4 px-6 m-4 z-10 transition-all duration-700 bg-white shadow-md rounded-xl",
          showRobot ? "right-0 opacity-100" : "right-[-100%] opacity-0",
        )}
      >
        <div className="bg-white rounded-xl max-w-96">
          <span className="block mb-4">
            {t("robot_text")}
          </span>
        </div>
        <div className="w-full flex justify-between items-end">
          <Button style="secondary" onClick={() => setShowRobot(false)}>
            {t("close")}
          </Button>
          <Robot expression="smiling"/>
        </div>
      </div>
      <DataGraph
        states={states}
        href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/0"
        onStateChange={onStateChange}
      />
    </div>
  );
}
