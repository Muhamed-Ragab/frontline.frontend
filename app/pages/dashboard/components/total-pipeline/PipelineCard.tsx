import type { Sale } from "@/types/analytics";
import PipelineStageChip from "../PipelineStageChip";

const PipelineCard = ({ sale }: { sale: Sale }) => {
  return (
    <div className='flex items-center justify-between gap-2'>
      <p className='text-xl whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis'>
        {sale.companyName}
      </p>
      <PipelineStageChip
        stage={
          sale.salesProcessPerformers[sale.salesProcessPerformers.length - 1]
            ?.stage
        }
      />
    </div>
  );
};

export default PipelineCard;
