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

const states = [
  {
    text: "Nach unserer ersten Analyse wissen wir nun schon viele Dinge über Marie.",
  },
  {
    text: "Durch das Lesen der Texte in der Beschreibung des Profils und der Posts können wir schon viele Dinge erahnen, die Marie beschreiben oder die ihr gefallen könnten.",
  },
  {
    text: "Wir können vermuten, dass Marie ein Fan von Radfahren ist. Es könnte also naheliegen, dass Marie auch Dinge gefallen, die andere Leute - die auch Fahrradfahren mögen - auch mögen könnten.",
  },
  {
    text: "Gehen wir einen Schritt weiter, AIris hat noch eine Aufgabe für dich.",
  },
];

export default function DataProcessing3() {
  const sigmaContainer = useRef(null);
  const [state, setState] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("user", {
      x: 0,
      y: 0,
      size: 60,
      label: "Marie Magic",
      highlighted: true,
      color: "#FFFFFF",
      image: "/posts/profile_marie.png",
    });

    for (let i = 0; i < 5; i++) {
      graph.addNode("node" + i, {
        x: 0,
        y: 0,
        size: 30,
        color: "#F97215",
        label: "Factor " + i,
      });
      graph.addEdge("node" + i, "user", { weight: 15 });
    }

    const sigma = new Sigma(graph, sigmaContainer.current!!, {
      defaultNodeType: "image",
      allowInvalidContainer: true,
      nodeProgramClasses: {
        image: NodeImageProgram,
      },
    });
    // sigma.getCamera().disable();

    circular.assign(graph);

    const layout = new ForceSupervisor(graph, {
      isNodeFixed: (_, attr) => attr.highlighted,
    });
    layout.start();

    let counter = 0;
    const id = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        graph.addNode("node" + counter + "_" + i, {
          x: i,
          y: 0,
          size: 15,
          color: "#003A62",
          label: i,
        });
        graph.addEdge("node" + counter + "_" + i, "node" + counter);
      }
      counter++;
      if (counter >= 5) {
        clearInterval(id);
      }
    }, 1000);

    return () => {
      sigma.kill();
    };
  }, []);

  function onClick() {
    if (state >= states.length - 1) {
      router.push("/space/daten-verarbeitung/kapitel3");
      return;
    }
    setState((state) => state + 1);
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h3 className="mt-10 mb-16 font-medium text-2xl text-center w-full md:w-3/4">
        <AnimatedText>{states[state].text}</AnimatedText>
      </h3>

      <div className="h-full w-full" ref={sigmaContainer}></div>

      <Button className="mt-16" onClick={onClick}>
        Weiter
      </Button>
    </div>
  );
}
