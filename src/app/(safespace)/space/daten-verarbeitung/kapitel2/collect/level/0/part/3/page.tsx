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
    ],
  },
  {
    text: "Wir können schon allgemeine Dinge über sie erfahren: Alter, Wohnort, Geschlecht, Schule ...",
    addNodes: [
      {
        name: "allgemein",
        attributes: { ...nodeFactor(), label: "Allgemein" },
        edgeTo: "user",
      },
      {
        name: "age",
        attributes: { ...nodeAttr(), label: "17 Jahre alt" },
        edgeTo: "allgemein",
      },
      {
        name: "wohnort",
        attributes: { ...nodeAttr(), label: "lebt in München" },
        edgeTo: "allgemein",
      },
      {
        name: "aussehen",
        attributes: { ...nodeAttr(), label: "Aussehen" },
        edgeTo: "allgemein",
      },
      {
        name: "follower",
        attributes: { ...nodeAttr(), label: "97 Follower" },
        edgeTo: "allgemein",
      },
      {
        name: "following",
        attributes: { ...nodeAttr(), label: "folgt 189 Personen" },
        edgeTo: "allgemein",
      },
      {
        name: "schule",
        attributes: { ...nodeFactor(), label: "Schule" },
        edgeTo: "user",
      },
      {
        name: "klasse",
        attributes: { ...nodeAttr(), label: "12. Klasse" },
        edgeTo: "schule",
      },
      {
        name: "schule-ort",
        attributes: {
          ...nodeAttr(),
          label: "Franz von Miller Gymnasium in München",
        },
        edgeTo: "schule",
      },
      {
        name: "situation-schule",
        attributes: { ...nodeAttr(), label: "lernt viel" },
        edgeTo: "schule",
      },
      {
        name: "stress_schule",
        attributes: { ...nodeAttr(), label: "Stress" },
        edgeTo: "schule",
      },
    ],
  },
  {
    text: "Wir wissen nun auch einiges über ihre aktuelle Hobbies und Dinge, die sie mag.",
    addNodes: [
      {
        name: "musik",
        attributes: { ...nodeFactor(), label: "Musik" },
        edgeTo: "user",
      },
      {
        name: "fan",
        attributes: { ...nodeAttr(), label: "Billie Eilish" },
        edgeTo: "musik",
      },
      {
        name: "konzert",
        attributes: { ...nodeAttr(), label: "Konzert" },
        edgeTo: "musik",
      },
      {
        name: "konzert_dortmund",
        attributes: { ...nodeAttr(), label: "Dortmund" },
        edgeTo: "musik",
      },
      {
        name: "song_billie",
        attributes: { ...nodeAttr(), label: "Everything I wanted" },
        edgeTo: "musik",
      },
      {
        name: "song_emotional",
        attributes: { ...nodeAttr(), label: "Emotional" },
        edgeTo: "musik",
      },
      {
        name: "song_sentimental",
        attributes: { ...nodeAttr(), label: "Sentimental" },
        edgeTo: "musik",
      },
    ],
  },
  {
    text: 'Wenn sie emotionale Lieder wie "Everything I wanted" hört, können wir vermuten, dass ihr andere emotionale Lieder ebenso gefallen könnten.',
  },
  {
    text: "Und das war es auch noch nicht. Wir können immer noch ein paar andere Dinge von Marie analysieren und speichern.",
    addNodes: [
      {
        name: "familie",
        attributes: { ...nodeFactor(), label: "Familie" },
        edgeTo: "user",
      },
      {
        name: "schwester",
        attributes: { ...nodeAttr(), label: "Schwester Lea" },
        edgeTo: "familie",
      },
      {
        name: "hund",
        attributes: { ...nodeAttr(), label: "Hund" },
        edgeTo: "familie",
      },
      {
        name: "familienmensch",
        attributes: { ...nodeAttr(), label: "Familienmensch" },
        edgeTo: "familie",
      },
      {
        name: "ferienjob",
        attributes: { ...nodeFactor(), label: "Ferienjob" },
        edgeTo: "user",
      },
      {
        name: "sneaker",
        attributes: { ...nodeAttr(), label: "Sneaker" },
        edgeTo: "ferienjob",
      },
      {
        name: "sneaker_name",
        attributes: { ...nodeAttr(), label: "Nike AIR JORDAN 1" },
        edgeTo: "ferienjob",
      },
    ],
  },
  {
    text: "In diesem ersten Schritt haben wir schon bei einer kurzen Analyse viele Informationen über Marie erhalten.",
  },
  {
    text: "Wir gehen nun einen Schritt weiter und versuchen noch mehr Daten zu erhalten.",
  },
];

export default function DataProcessing3() {
  return (
    <DataGraph
      states={states}
      href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/0"
    />
  );
}
