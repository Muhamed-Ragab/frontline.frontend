import useSaleSwitcher from "@/hooks/dashboard/useSaleSwitcher";
import type { Sale } from "@/types/analytics";
import DocumentVerified from "public/icons/DocumentVerified";
import EmptySalesPlaceholder from "./documented-sales/EmptySalesPlaceholder";
import NextPrevSwitcher from "./documented-sales/NextPrevSwitcher";
import SaleDetails from "./documented-sales/SaleDetails";
import SalesSwitcher from "./documented-sales/SalesSwitcher";

const DocumentedSales = ({ sales }: { sales: Sale[] }) => {
  const visibleSales = sales.filter(
    sale => sale.salesProcessPerformers.length > 0
  );
  const { isSwitching, currentSale, switchSale } = useSaleSwitcher(
    visibleSales.slice(0, 3).length
  );

  return (
    <div className='bg-[#eaeaea] rounded-xl border-1.5 border-b-0 border-[#dbdbdb] h-full flex flex-col'>
      <div className='flex items-center gap-3 p-7'>
        <DocumentVerified />
        <h2 className='text-xl font-medium font-clash-display'>
          Documented Sales
        </h2>
      </div>
      <div className='relative flex flex-col justify-center items-center h-full font-medium py-5 px-7 bg-[#f8f8f8] rounded-xl border-1.5 border-[#DBDBDB]'>
        {visibleSales.length === 0 && <EmptySalesPlaceholder />}
        {visibleSales.length >= 1 && (
          <>
            <SaleDetails
              sales={visibleSales}
              currentSale={currentSale}
              isSwitching={isSwitching}
            />
            <SalesSwitcher
              isSwitching={isSwitching}
              sales={visibleSales}
              currentSale={currentSale}
              switchSale={switchSale}
            />
          </>
        )}
        {visibleSales.length > 1 && (
          <NextPrevSwitcher
            currentSale={currentSale}
            switchSale={switchSale}
            isSwitching={isSwitching}
          />
        )}
      </div>
    </div>
  );
};

export default DocumentedSales;
