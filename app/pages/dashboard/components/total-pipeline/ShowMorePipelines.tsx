import type { Sale } from "@/types/analytics";
import { cn } from "@nextui-org/theme";
import { useState } from "react";
import PipelinesPopover from "./PipelinesPopover";

const ShowMorePipelines = ({ sales }: { sales: Sale[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#e9e9e9] px-5 py-5 mt-4 flex items-center justify-between gap-1 rounded-3xl duration-300 relative min-h-20'>
      {isOpen && <PipelinesPopover sales={sales} />}
      {!isOpen && (
        <p className='text-sm duration-300 large:text-xs'>
          You Have Other Pipelines
        </p>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "left-[calc(100%-190px)] bg-[#1E1E1E] text-white px-7 py-3 rounded-xl text-xs active:scale-95 hover:opacity-90 duration-300 whitespace-nowrap",
          isOpen && "absolute left-1/2 -translate-x-1/2"
        )}
      >
        {isOpen ? "See Less" : "See All"}
      </button>
    </div>
  );
};

export default ShowMorePipelines;
