import { NodeObject } from "react-force-graph-3d";

export interface GraphNode {
  id: string;
  name?: string;
  type: string;
  color: string;
}

export type GraphLink = {
  source: string | NodeObject<GraphNode>;
  target: string | NodeObject<GraphNode>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type GraphData = {
  nodes: GraphNode[];
  links: GraphLink[];
};
