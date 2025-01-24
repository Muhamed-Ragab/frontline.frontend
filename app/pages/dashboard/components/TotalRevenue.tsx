import BellRing from "public/icons/BellRing";
import { IoIosArrowRoundForward } from "react-icons/io";

const TotalRevenue = ({ totalRevenue }: { totalRevenue: number }) => {
  return (
    <div className='bg-[#f6f6f6] rounded-xl border-1.5 border-b-0 border-[#DBDBDB] h-full flex flex-col justify-between'>
      <div className='flex items-center gap-2 p-5'>
        <BellRing />
        <h2 className='text-xl font-medium font-clash-display'>
          Total Revenue
        </h2>
      </div>
      <div className='relative flex-grow'>
        <div className='absolute top-0 -left-2 w-10 h-full bg-customPrimary z-[1] rounded-xl' />
        <div className='absolute -top-3 -right-3 w-16 h-16 medium:-top-2 medium:-right-2 bg-customPrimary z-[1] rounded-xl' />
        <div className='w-full h-full font-medium font-roobert-pro py-7 px-10 large:px-5 medium:text-px-3 bg-[#f8f8f8] rounded-xl border-1.5 border-[#DBDBDB] flex items-center 3xl:flex-col 3xl:items-start 3xl:justify-center gap-4 relative z-[2]'>
          <p className='text-5xl font-medium large:text-[44px] medium:text-[38px]'>
            ${totalRevenue}
          </p>
          {totalRevenue > 0 && (
            <div className='flex items-center gap-4'>
              <span className='bg-customPrimary p-1 rounded-full'>
                <IoIosArrowRoundForward className='text-foreground text-xl -rotate-[30deg]' />
              </span>
              <span className='font-clash-display text-sm'>0%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
