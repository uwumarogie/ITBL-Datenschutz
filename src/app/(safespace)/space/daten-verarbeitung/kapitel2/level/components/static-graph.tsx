import {useEffect, useMemo, useRef} from "react";
import Graph from "graphology";
import {node} from "prop-types";
import Sigma from "sigma";
import {NodeImageProgram} from "@sigma/node-image";
import {circular} from "graphology-layout";
import ForceSupervisor from "graphology-layout-force/worker";


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

export default function StaticGraph({nodes, edges, className}: {nodes?: Node[], edges?: [], className?: string }) {
  const sigmaContainer = useRef(null);

  const graph = useMemo(() => {
    const g = new Graph();

    nodes?.forEach(
      ({ name, attributes, edgeTo, edgeAttributes }) => {
        g.addNode(name, attributes);
      },
    );

    nodes?.forEach(
      ({ name, attributes, edgeTo, edgeAttributes }) => {
        if (edgeTo) {
          g.addEdge(name, edgeTo, edgeAttributes);
        }
      },
    )
    edges?.forEach(({ source, target, attributes }) =>
      g.addEdge(source, target, attributes),
    );

    return g;
  }, [node, edges]);

  // Construct graph and setup Sigma.js
  useEffect(() => {
    const sigma = new Sigma(graph, sigmaContainer.current!!, {
      defaultNodeType: "image",
      allowInvalidContainer: true,
      nodeProgramClasses: {
        image: NodeImageProgram,
      },
    });


    circular.assign(graph);

    const layout = new ForceSupervisor(graph, {
      isNodeFixed: (_, attr) => attr.highlighted,
    });
    layout.start();

    return () => {
      sigma.kill();
    };
  })

  return <div className={className}>
    <div className="h-full w-full" ref={sigmaContainer}></div>
  </div>
}