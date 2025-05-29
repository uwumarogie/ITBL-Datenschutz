import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Graph from "graphology";
import Sigma from "sigma";
import { NodeImageProgram } from "@sigma/node-image";
import { circular } from "graphology-layout";
import ForceSupervisor from "graphology-layout-force/worker";
import AnimatedText from "@/components/animated/animated-text";
import Button from "@/components/button";

export type Node = {
  name: string;
  attributes?: any | undefined;
  edgeTo?: string | undefined;
  edgeAttributes?: any | undefined;
};

export type Edge = {
  source: string;
  target: string;
  attributes?: any | undefined;
};

export type DataGraphState = {
  text?: String;
  addNodes?: Node[];
  addEdges?: Edge[];
};

type DataGraphProps = {
  states: DataGraphState[];
  onStateChange?: (state: number) => void;
  onDone?: () => void;
  href: string;
};

export default function DataGraph({
  states,
  href,
  onStateChange,
  onDone,
}: DataGraphProps) {
  const sigmaContainer = useRef(null);
  const [state, setState] = useState(0);
  const router = useRouter();

  const graph = useMemo(() => {
    const g = new Graph();

    states[0]?.addNodes?.forEach(
      ({ name, attributes, edgeTo, edgeAttributes }) => {
        g.addNode(name, attributes);
        if (edgeTo) {
          g.addEdge(name, edgeTo, edgeAttributes);
        }
      },
    );
    states[0]?.addEdges?.forEach(({ source, target, attributes }) =>
      g.addEdge(source, target, attributes),
    );

    return g;
  }, [states]);

  // Construct graph and setup Sigma.js
  useEffect(() => {
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

    return () => {
      sigma.kill();
    };
  });

  async function nextState() {
    const nextState = state + 1;
    setState(nextState);
    const data = states[nextState];
    onStateChange?.(nextState);

    for (const node of data.addNodes ?? []) {
      graph.addNode(node.name, node.attributes);
      if (node.edgeTo) {
        graph.addEdge(node.name, node.edgeTo, node.edgeAttributes);
      }
      await new Promise((resolve) => {
        setTimeout(resolve, 10);
      });
    }
    for (const { source, target, attributes } of data.addEdges ?? []) {
      graph.addEdge(source, target, attributes);
    }
  }

  async function onClick() {
    if (state >= states.length - 1) {
      onDone?.();
      router.push(href);
      return;
    }
    await nextState();
  }

  return (
    <div className="h-full flex flex-col justify-center items-center relative">
      <h3 className="mb-4 font-medium text-xl text-center w-full md:w-3/4">
        <AnimatedText>{(states[state].text ?? "") as string}</AnimatedText>
      </h3>

      <div className="h-full w-full" ref={sigmaContainer}></div>

      <Button className="mt-4" onClick={onClick}>
        Weiter
      </Button>
    </div>
  );
}
