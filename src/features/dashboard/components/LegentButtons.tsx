import { LegendVisibility, Levels } from "../types/labelVisibility";
import { Legend } from "./Legent";

const LegentButtons = ({
  legendVisibility,
  onToggle,
}: {
  legendVisibility: LegendVisibility;
  onToggle: (level: Levels) => void;
}) => {
  return (
    <div className="absolute top-3 left-16 transform -translate-x-1/2 flex flex-col items-end z-40">
      <Legend
        label="Dealership"
        color="#ffb703"
        active={legendVisibility.Dealership}
        onToggle={() => {
          onToggle("Dealership");
        }}
      />
      <Legend
        label="Heading"
        color="#a9def9"
        active={legendVisibility.Heading}
        onToggle={() => {
          onToggle("Heading");
        }}
      />
      <Legend
        label="Segment"
        color="#8338ec"
        active={legendVisibility.Segment}
        onToggle={() => {
          onToggle("Segment");
        }}
      />
    </div>
  );
};

export default LegentButtons;
