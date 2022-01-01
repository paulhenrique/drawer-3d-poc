import React from "react";
import { ForceGraph3D } from "react-force-graph";

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
      })),
  };
}

function ForceGraph() {
  const nodes = genRandomTree(3);
  return <ForceGraph3D graphData={nodes} />;
}

export default ForceGraph;
