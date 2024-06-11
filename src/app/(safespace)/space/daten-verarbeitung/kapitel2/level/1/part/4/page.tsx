"use client";

import { NodeImageProgram } from "@sigma/node-image";
import { useEffect, useMemo, useRef, useState } from "react";
import Graph from "graphology";
import Sigma from "sigma";
import forceAtlas2 from "graphology-layout-forceatlas2";
import { assignLayout } from "graphology-layout/utils";
import { circular, random } from "graphology-layout";
import { animateNodes } from "sigma/utils";
import forceLayout from "graphology-layout-force";
import ForceSupervisor from "graphology-layout-force/worker";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedText from "@/components/animated/AnimatedText";
import { atRule } from "postcss";
import DataGraph, {
  DataGraphState,
} from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/data-graph";

const nodeFactor = {
  x: 0,
  y: 0,
  size: 30,
  color: "#F97215",
};

const nodeAttr = {
  x: 0,
  y: 0,
  size: 15,
  color: "#003A62",
};

const states: DataGraphState[] = [
  {
    text: "Nach unserer ersten Analyse wissen wir nun schon viele Dinge über Marie. Wir sammeln alle Informationen in einer Art Mind Map.",
    addNodes: [
      {
        name: "user",
        attributes: {
          x: 0,
          y: 0,
          size: 60,
          label: "Marie Magic",
          highlighted: true,
          color: "#FFFFFF",
          image: "/posts/profile_marie.png",
        },
      },
      ...[0, 1, 2, 3, 4].map((i) => ({
        name: "node" + i,
        attributes: {
          x: 0,
          y: 0,
          size: 30,
          color: "#F97215",
          label: "Factor " + i,
        },
        edgeTo: "user",
      })),
    ],
  },
  {
    text: "Durch das Lesen der Texte in der Beschreibung des Profils und der Posts können wir schon viele Dinge erahnen, die Marie beschreiben oder die ihr gefallen könnten.",
    addNodes: [
      {
        name: "attr",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node0",
      },
      {
        name: "attr2",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node0",
      },
      {
        name: "attr3",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node0",
      },
      {
        name: "attr4",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node0",
      },
    ],
  },
  {
    text: "Wir können vermuten, dass Marie ein Fan von Radfahren ist. Es könnte also naheliegen, dass Marie auch Dinge gefallen, die andere Leute - die auch Fahrradfahren mögen - auch mögen könnten.",
    addNodes: [
      {
        name: "attr21",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node2",
      },
      {
        name: "attr22",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node2",
      },
      {
        name: "attr23",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node2",
      },
      {
        name: "attr24",
        attributes: { ...nodeAttr, label: "Attribute" },
        edgeTo: "node2",
      },
    ],
  },
  {
    text: "Gehen wir einen Schritt weiter, AIris hat noch eine Aufgabe für dich.",
  },
];

export default function DataProcessing3() {
  return (
    <DataGraph
      states={states}
      href="/space/daten-verarbeitung/kapitel2/level/2/part/0"
    />
  );
}
