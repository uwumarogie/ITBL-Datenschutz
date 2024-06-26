"use client";

import DataGraph, {
  DataGraphState,
  Node,
  Edge,
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

const states: DataGraphState[] = [
  {
    text: "Aus unserer vorherigen Analyse haben wir durch die Dinge, die Marie aktiv veröffentlicht hat, viel über sie gelernt",
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
    text: "Über Daten, die Marie unbewusst generiert hat, haben wir nun neue Verbindungen herstellen können.",
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
    text: "Wir haben außerdem neue Beziehungen durch Freunde und Follower.",
  },
  {
    text: "Nehmen wir als Beispiel Lukas.",
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
    text: "Lukas hat sein eigenes Universum an Daten um sich herum",
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
    text: "Wenn wir nun Verbindung zwischen Marie und Lukas herstellen, ...",
  },
  {
    text: "Können wir von Marie aus auf ganz neue Themen kommen.",
    addEdges: [
      {
        source: "user",
        target: "lukas",
        attributes: { weight: 20, size: 30, color: "red" },
      },
    ],
  },
  {
    text: "Über diese Beziehungen können wir nun ganz neue Themen vorschlagen, die Marie gefallen könnten.",
  },
];

export default function DataProcessing3() {
  return (
    <DataGraph
      states={states}
      href="/space/daten-verarbeitung/overview"
    />
  );
}
