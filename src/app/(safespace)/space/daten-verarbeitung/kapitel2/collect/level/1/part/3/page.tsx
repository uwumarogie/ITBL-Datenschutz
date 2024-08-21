"use client";

import DataGraph, {
  DataGraphState,
  Node,
  Edge,
} from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/data-graph";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
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

const baseFactors: Node[] = [
  {
    name: "allgemein",
    attributes: { ...nodeFactor() },
    edgeTo: "user",
  },
  {
    name: "schule",
    attributes: { ...nodeFactor() },
    edgeTo: "user",
  },
  {
    name: "musik",
    attributes: { ...nodeFactor() },
    edgeTo: "user",
  },
  {
    name: "familie",
    attributes: { ...nodeFactor() },
    edgeTo: "user",
  },
  {
    name: "ferienjob",
    attributes: { ...nodeFactor() },
    edgeTo: "user",
  },
];

function useStates(): DataGraphState[] {
  const t = useTranslations("datenverarbeitung.collect.level.1.part.3")
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
            label: "Marie Magic",
            highlighted: true,
            color: "#FFFFFF",
            image: "/posts/profile_marie.png",
          },
        },
        ...baseFactors,
        ...baseFactors.reduce((acc, next) => {
          const attrs = [0, 1, 2, 3, 4].map(
            (i) =>
              ({
                name: next.name + "_" + i,
                attributes: { ...nodeAttr() },
                edgeTo: next.name,
              }) as Node,
          );
          return [...acc, ...attrs];
        }, [] as Node[]),
      ],
    },
    {
      text: t("text_2"),
      addNodes: [
        ...baseFactors.reduce((acc, next) => {
          const attrs = [6, 7].map(
            (i) =>
              ({
                name: next.name + "_" + i,
                attributes: { ...nodeAttr() },
                edgeTo: next.name,
              }) as Node,
          );
          return [...acc, ...attrs];
        }, [] as Node[]),
      ],
      addEdges: [
        {
          source: "schule",
          target: "musik",
        },
        {
          source: "familie_2",
          target: "ferienjob_4",
        },
        {
          source: "familie_1",
          target: "allgemein_0",
        },
        {
          source: "musik_1",
          target: "musik_2",
        },
        {
          source: "schule_3",
          target: "allgemein_3",
        },
      ],
    },
    {
      text: t("text_3"),
    },
    {
      text: t("text_4"),
      addNodes: [
        {
          name: "lukas",
          attributes: {
            x: 300,
            y: 0,
            size: 60,
            label: "Lukas",
            color: "#efefef",
            image: "/posts/profile_lukas.png",
          },
        },
      ],
    },
    {
      text: t("text_5"),
      addNodes: [
        ...baseFactors.map((n) => ({
          name: n.name + "_lukas",
          attributes: {
            ...n.attributes,
            x: n.attributes.x + 360,
            color: "green",
          },
          edgeTo: "lukas",
        })),
        ...baseFactors.reduce((acc, next) => {
          const attrs = [0, 1, 2].map(
            (i) =>
              ({
                name: next.name + "_lukas" + "_" + i,
                attributes: { ...nodeAttr() },
                edgeTo: next.name + "_lukas",
              }) as Node,
          );
          return [...acc, ...attrs];
        }, [] as Node[]),
      ],
    },
    {
      text: t("text_6"),
    },
    {
      text: t("text_7"),
      addEdges: [
        {
          source: "user",
          target: "lukas",
          attributes: { weight: 20, size: 30, color: "red" },
        },
      ],
    },
    {
      text: t("text_8"),
    },
  ];
}

export default function DataProcessing3() {
  const states = useStates()
  async function onDone() {
    const context = new PersistUserService();
    await context.setAchievement(
      AchievementId.DATA_PROCESSING_CHECKPOINT_COLLECT,
      true,
    );
  }
  return (
    <DataGraph
      states={states}
      onDone={onDone}
      href="/space/daten-verarbeitung/overview"
    />
  );
}
