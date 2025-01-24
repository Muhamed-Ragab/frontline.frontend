import type { Sale } from "@/types/analytics";
import { formatDateString } from "@/utils/helpers";

const SaleDetails = ({
  sales,
  currentSale,
  isSwitching,
}: {
  sales: Sale[];
  currentSale: number;
  isSwitching: boolean;
}) => {
  const visibleSales = sales
    .filter(sale => sale.salesProcessPerformers.length > 0)
    .slice(0, 3);

  return (
    <div
      style={{
        opacity: isSwitching ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
      }}
      className='flex flex-col gap-3 justify-center items-center'
    >
      <p className='text-3xl large:text-2xl font-clash-display'>
        {sales[currentSale].companyName}
      </p>
      <p className='text-foreground-secondary font-roobert-pro large:text-sm'>
        {formatDateString(sales[currentSale].createdAt)}
      </p>
      <span className='bg-customPrimary p-1 px-4 rounded-lg text-xs'>
        {visibleSales[currentSale]?.salesProcessPerformers[
          visibleSales[currentSale]?.salesProcessPerformers.length - 1
        ].stage === "Closed Won"
          ? "Closed"
          : "Ongoing"}
      </span>
    </div>
  );
};

export default SaleDetails;
