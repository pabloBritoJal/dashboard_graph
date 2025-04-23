import GraphCard from "./GraphCard";

const DashboardContainer = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header */}
      <div className="h-12 bg-gray-800 text-white flex items-center px-4">
        Header
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-16 bg-gray-700 text-white flex items-center justify-center">
          S
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 p-2 bg-gray-100">
          {/* Top Left - RED BLOCK */}
          <div className="bg-red-500 rounded" />

          {/* Componente */}
          {/* Top Right */}
          <div className="relative rounded">
            <GraphCard />
          </div>

          {/* Bottom Left */}
          <div className="bg-green-300 rounded" />

          {/* Bottom Right */}
          <div className="bg-yellow-300 rounded">
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
