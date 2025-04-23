import ForceGraph3D, {
  ForceGraphMethods,
  LinkObject,
  NodeObject,
} from "react-force-graph-3d";
import * as THREE from "three";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GraphData, GraphLink, GraphNode } from "../types/graph_types";
import { LegendVisibility } from "../types/labelVisibility";
import { useContainerSize } from "../hooks/useContainerSize";

interface ExpandableGraphProps {
  graphData: GraphData;
  legendVisibility: LegendVisibility;
}

export const ExpandableGraph = ({
  graphData,
  legendVisibility,
}: ExpandableGraphProps) => {
  const fgRef = useRef<
    | ForceGraphMethods<NodeObject<GraphNode>, LinkObject<GraphNode, GraphLink>>
    | undefined
  >(undefined);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [hiddenNodeIds, setHiddenNodeIds] = useState<Set<string>>(new Set());
  const [freezeLayout, setFreezeLayout] = useState(false);
  const [dataGraph, setDataGraph] = useState(graphData);

  const { ref, width, height } = useContainerSize();

  const handleHover = useCallback((node: NodeObject<GraphNode> | null) => {
    setHoveredNode(node ?? null);
  }, []);

  const handleClick = useCallback((node: NodeObject<GraphNode>) => {
    setSelectedNode(node);
  }, []);

  const hideNodeAndDescendants = useCallback(
    (nodeId: string) => {
      if (hiddenNodeIds.has(nodeId)) return;

      const toHide = new Set<string>();
      const visit = (id: string) => {
        if (toHide.has(id)) return;
        toHide.add(id);
        dataGraph.links.forEach((link) => {
          const source =
            typeof link.source === "string" ? link.source : link.source.id;
          const target =
            typeof link.target === "string" ? link.target : link.target.id;
          if (source === id) visit(target);
        });
      };

      visit(nodeId);
      setFreezeLayout(true);
      setHiddenNodeIds(toHide);
      setSelectedNode(null);
    },
    [dataGraph.links, hiddenNodeIds]
  );

  const showHiddenNode = useCallback(() => {
    setHiddenNodeIds(new Set());
  }, []);

  const filteredGraphData = useMemo<GraphData>(() => {
    return {
      nodes: dataGraph.nodes.filter((n) => !hiddenNodeIds.has(n.id)),
      links: dataGraph.links.filter((l) => {
        const source = typeof l.source === "string" ? l.source : l.source.id;
        const target = typeof l.target === "string" ? l.target : l.target.id;
        return !hiddenNodeIds.has(source) && !hiddenNodeIds.has(target);
      }),
    };
  }, [hiddenNodeIds, dataGraph]);

  const createTextSprite = (text: string, color: THREE.Color) => {
    const canvas = document.createElement("canvas");
    const ratio = window.devicePixelRatio || 2;
    const width = 512,
      height = 256;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(ratio, ratio);
      ctx.font = "bold 40px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = color.getStyle();
      wrapText(ctx, text, width / 2, height / 2, width - 20, 48);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: texture, transparent: true })
    );
    sprite.scale.set(10, 5, 1);
    return sprite;
  };

  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let line = "";

    for (const word of words) {
      const testLine = `${line}${word} `;
      if (ctx.measureText(testLine).width > maxWidth && line !== "") {
        lines.push(line);
        line = `${word} `;
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    const offsetY = y - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((l, i) =>
      ctx.fillText(l.trim(), x, offsetY + i * lineHeight)
    );
  };

  useEffect(() => {
    setDataGraph(graphData);
  }, [graphData]);


  return (
    <div
      ref={ref}
      className="relative w-full h-full"
    >
      {selectedNode && (
        <button
          onClick={() => hideNodeAndDescendants(selectedNode.id)}
          className="absolute top-16 left-8 z-50"
        >
          <FaEye size={25} />
        </button>
      )}
      {hiddenNodeIds.size > 0 && (
        <button
          onClick={showHiddenNode}
          className="absolute top-16 left-8 z-50"
        >
          <FaEyeSlash size={25} />
        </button>
      )}

      <ForceGraph3D
        ref={fgRef}
        width={width}
        height={height}
        graphData={filteredGraphData}
        backgroundColor="#0d1b2a"
        onNodeClick={handleClick}
        onNodeHover={handleHover}
        onBackgroundClick={() => setSelectedNode(null)}
        cooldownTicks={freezeLayout ? 0 : 400}
        showNavInfo={false}
        linkDirectionalArrowLength={3}
        linkDirectionalArrowRelPos={1.1}
        linkCurvature={0.25}
        nodeLabel={() => ""}
        nodeVal={(node) =>
          node.type === "Dealer"
            ? 8
            : node.type === "Heading"
            ? 5
            : node.type === "Segment"
            ? 3
            : node.type === "ExactId"
            ? 1
            : 2
        }
        nodeColor={() => "#ffffff"}
        nodeThreeObject={(node) => {
          const isSelected = selectedNode && node.id !== selectedNode.id;
          const color = new THREE.Color(isSelected ? "#6c757d" : node.color);
          let geometry: THREE.BufferGeometry;

          switch (node.type) {
            case "Dealer":
              geometry = new THREE.ConeGeometry(3, 6, 12);
              break;
            case "Heading":
              geometry = new THREE.BoxGeometry(4, 4, 4);
              break;
            case "Segment":
              geometry = new THREE.CylinderGeometry(2, 2, 2, 6);
              break;
            default:
              geometry = new THREE.SphereGeometry(3, 12, 12);
          }

          const mesh = new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({ color, metalness: 0.1 })
          );
          mesh.castShadow = mesh.receiveShadow = true;

          if (["Dealer", "Heading", "Segment"].includes(node.type)) {
            const edges = new THREE.EdgesGeometry(geometry);
            const lines = new THREE.LineSegments(
              edges,
              new THREE.LineBasicMaterial({
                color: "#fff",
                transparent: true,
                opacity: 0.2,
              })
            );
            mesh.add(lines);
          }

          const shouldShowLabel =
            (node.type === "Dealer" && legendVisibility.Dealership) ||
            (node.type === "Heading" && legendVisibility.Heading) ||
            (node.type === "Segment" && legendVisibility.Segment);

          if (shouldShowLabel && (node.label || node.name)) {
            const sprite = createTextSprite(
              node.label || node.name,
              new THREE.Color("#fff")
            );
            sprite.position.y = 7;
            mesh.add(sprite);
          }

          return mesh;
        }}
      />

      {hoveredNode && (
        <div
          className="absolute top-14 right-4 bg-white text-sm text-black rounded shadow-md px-3 py-2 pointer-events-none"
        >
          <div>
            <strong>{hoveredNode.name}</strong>
          </div>
          <div className="text-gray-600">Categoría: {hoveredNode.type}</div>
        </div>
      )}
    </div>
  );
};
