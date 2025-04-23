import { MdOutlineSwipe, MdPanToolAlt, MdZoomInMap } from "react-icons/md";

const ControlsIndicator = () => {
  return (
    <div className="absolute bottom-1 left-[calc(50%-250px)] flex flex-row space-x-1 text-xs text-white z-50">
      <div className="flex items-center gap-1 mb-1">
        <MdOutlineSwipe className="text-xs text-yellow-400" />
        <span className="text-xs">Rotate: Left mouse button</span>
      </div>
      <div className="flex items-center gap-1 mb-1">
        <MdPanToolAlt className="text-xs text-green-400" />
        <span className="text-xs">Pan: Right mouse button</span>
      </div>
      <div className="flex items-center gap-1">
        <MdZoomInMap className="text-xs text-blue-400" />
        <span className="text-xs">Zoom: Mouse wheel</span>
      </div>
    </div>
  );
};

export default ControlsIndicator;
