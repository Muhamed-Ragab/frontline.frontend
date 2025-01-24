import type { Sale } from "@/types/analytics";
import { cn } from "@nextui-org/theme";
import { motion } from "framer-motion";
import PipelineStageChip from "../PipelineStageChip";

const PipelinesPopover = ({ sales }: { sales: Sale[] }) => {
  const eachPipelineHeight = window.innerWidth > 1530 ? 70 : 58;
  const topValue = 72 + sales.length * eachPipelineHeight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      style={sales.length < 6 ? { top: `-${topValue}px` } : {}}
      className={cn(
        "p-5 py-5 rounded-xl bg-[#f8f8f8] border-1.5 border-[#DBDBDB] w-full absolute min-w-[430px] z-[3] left-0",
        sales.length >= 6 && "-top-[490px] large:-top-[435px]"
      )}
    >
      <div className='flex flex-col gap-7 font-roobert-pro p-5 large:py-3 bg-[#f8f8f8] max-h-[450px] overflow-auto smScroll'>
        {sales.map((sale, index) => (
          <div key={index} className='flex items-center justify-between gap-2'>
            <p className='text-xl'>{sale.companyName}</p>
            <PipelineStageChip
              stage={
                sale.salesProcessPerformers[
                  sale.salesProcessPerformers.length - 1
                ].stage
              }
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PipelinesPopover;
