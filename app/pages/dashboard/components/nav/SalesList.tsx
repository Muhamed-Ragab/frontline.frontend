import type { Sale } from "@/types/analytics";
import { cn } from "@nextui-org/theme";
import { motion } from "framer-motion";
import { Link } from "react-router";

const SalesList = ({ sales }: { sales: Sale[] }) => {
  const visibleSales = sales.filter(
    sale => sale.salesProcessPerformers.length > 0
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "absolute -bottom-[360px] left-0 w-full h-[350px] bg-[#f4f4f4] z-[5] border-1.5 border-[#DBDBDB] overflow-auto p-3 rounded-2xl",
        visibleSales.length === 0 && "flex items-center justify-center"
      )}
    >
      {visibleSales.length > 0 ? (
        visibleSales.map((sale, index) => (
          <Link
            key={index}
            to={`/dashboard/${sale._id}`}
            className='flex items-center justify-between px-5 py-3 hover:bg-[#e4e4e4] duration-300 rounded-xl my-1 '
          >
            <p className='font-medium'>{sale.companyName}</p>
            <p className='bg-customPrimary p-1 px-4 rounded-lg text-xs'>
              {sale.salesProcessPerformers[
                sale.salesProcessPerformers.length - 1
              ].stage === "Closed Won"
                ? "Closed"
                : "Ongoing"}
            </p>
          </Link>
        ))
      ) : (
        <p className='font-medium text-center'>No Results</p>
      )}
    </motion.div>
  );
};

export default SalesList;
