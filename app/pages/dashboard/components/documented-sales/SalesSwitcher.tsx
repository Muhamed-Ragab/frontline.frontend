import type { Sale } from "@/types/analytics";
import { Link } from "react-router";

const SalesSwitcher = ({
  sales,
  currentSale,
  switchSale,
  isSwitching,
}: {
  sales: Sale[];
  currentSale: number;
  switchSale: (page: number) => void;
  isSwitching: boolean;
}) => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center absolute bottom-5'>
      <Link
        to={`/sales/${sales[currentSale]._id}`}
        style={{
          opacity: isSwitching ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
        className='bg-[#e9e9e9] p-2 px-8 rounded-lg text-sm font-roobert-pro mt-16'
      >
        See Details
      </Link>
      <div className='flex gap-1 mt-3'>
        {sales.slice(0, 3).map((_, index) => (
          <button
            key={index}
            disabled={isSwitching}
            style={{
              backgroundColor: index === currentSale ? "#1e1e1e" : "#9e9e9e",
            }}
            className='w-2 h-2 rounded-full'
            onClick={() => switchSale(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SalesSwitcher;
