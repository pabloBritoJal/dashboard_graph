import ForceGraph3D, {
  ForceGraphMethods,
  LinkObject,
  NodeObject,
} from "react-force-graph-3d";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { GraphData, GraphLink, GraphNode } from "../types/graph_types";
import { useContainerSize } from "../hooks/useContainerSize";

interface ExpandableGraph2Props {
  graphData: GraphData;
}

export const ExpandableGraph2 = ({ graphData }: ExpandableGraph2Props) => {
  const fgRef = useRef<
    | ForceGraphMethods<NodeObject<GraphNode>, LinkObject<GraphNode, GraphLink>>
    | undefined
  >(undefined);
  const [dataGraph, setDataGraph] = useState(graphData);
  const { ref, width, height } = useContainerSize();

  const geometryCache = useMemo(
    () => ({
      Dealer: new THREE.ConeGeometry(2, 4, 6),
      Heading: new THREE.BoxGeometry(2, 2, 2),
      Segment: new THREE.CylinderGeometry(1.5, 1.5, 2, 4),
      ExactId: new THREE.SphereGeometry(2, 6, 6),
    }),
    []
  );

  const materialCache = useMemo(() => new Map<string, THREE.Material>(), []);

  const getMaterial = (color: string) => {
    if (!materialCache.has(color)) {
      materialCache.set(color, new THREE.MeshBasicMaterial({ color }));
    }
    return materialCache.get(color)!;
  };

  const filteredGraphData = useMemo<GraphData>(
    () => ({
      nodes: dataGraph.nodes,
      links: dataGraph.links,
    }),
    [dataGraph]
  );

  useEffect(() => {
    setDataGraph(graphData);
  }, [graphData]);

  return (
    <div ref={ref} className="relative w-full h-full">
      <ForceGraph3D
        ref={fgRef}
        width={width}
        height={height}
        graphData={filteredGraphData}
        backgroundColor="#0d1b2a"
        showNavInfo={false}
        cooldownTicks={50} // No fuerzas, layout fijo
        linkCurvature={0.25}
        linkDirectionalArrowLength={0}
        nodeLabel={() => ""} // No tooltips
        nodeVal={() => 1} // tamaño uniforme
        nodeColor={(node) => node.color || "#ffffff"}
        nodeThreeObject={(node) => {
          const geometry =
            geometryCache[node.type as keyof typeof geometryCache] ||
            geometryCache.ExactId;
          const material = getMaterial(node.color || "#ffffff");
          return new THREE.Mesh(geometry, material);
        }}
      />
    </div>
  );
};
