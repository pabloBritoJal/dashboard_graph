type LegendProps = {
  label: string;
  color: string;
  active: boolean;
  onToggle: () => void;
};

export const Legend = ({ label, color, active, onToggle }: LegendProps) => {
  return (
    <div className="flex items-center gap-2 text-white">
      <span className="text-xs">{label}</span>
      <button
        onClick={onToggle}
        className="w-8 h-3 rounded-full relative transition duration-300"
        style={{
          backgroundColor: active ? color : `${color}B3`,
        }}
      >
        <div
          className={`absolute top-[1px] h-[10px] w-[10px] bg-white rounded-full shadow-md transition-all duration-300 ${
            active ? "left-[30px] -translate-x-full" : "left-[2px]"
          }`}
        />
      </button>
    </div>
  );
};
