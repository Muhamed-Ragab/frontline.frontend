import type { Sale } from "@/types/analytics";
import { cn } from "@nextui-org/theme";
import SalesFunnel from "public/icons/SalesFunnel";
import EmptyPipelinePlaceholder from "./EmptyPipelinePlaceholder";
import PipelineCard from "./PipelineCard";
import ShowMorePipelines from "./ShowMorePipelines";

const TotalPipeline = ({ sales }: { sales: Sale[] }) => {
  const visibleSales = sales
    .filter(sale => sale.salesProcessPerformers.length > 0)
    .slice(0, 3);

  return (
    <div className='bg-[#eaeaea] rounded-xl border-1.5 border-b-0 border-[#DBDBDB] h-full flex flex-col'>
      <div className='flex items-center gap-3 p-7'>
        <SalesFunnel />
        <h2 className='text-xl font-medium font-clash-display'>
          Total Pipeline
        </h2>
      </div>
      <div
        className={cn(
          "flex flex-col justify-between gap-7 h-full font-medium font-roobert-pro py-7 px-9 bg-[#f8f8f8] rounded-xl border-1.5 border-[#DBDBDB]",
          visibleSales.length === 0 && "justify-center"
        )}
      >
        {visibleSales.length === 0 && <EmptyPipelinePlaceholder />}
        {visibleSales.map((sale, index) => (
          <PipelineCard key={index} sale={sale} />
        ))}
        {visibleSales.length > 3 && <ShowMorePipelines sales={visibleSales} />}
      </div>
    </div>
  );
};

export default TotalPipeline;
