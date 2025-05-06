import { GraphComponent } from "npm_graph_component";

const GraphCard = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full px-3 py-1 dashboard-box">
        <GraphComponent dealerId={40426} maxNodes={3000} />
      </div>
    </div>
  );
};

export default GraphCard;
