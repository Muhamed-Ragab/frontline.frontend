import { AiOutlineDollar } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiLoopRightFill } from "react-icons/ri";

const CheckProfile = ({
  salesCycle,
  contractSize,
}: {
  salesCycle: number;
  contractSize: number;
}) => {
  return (
    <div className='bg-[#262626] rounded-xl h-full flex flex-col'>
      <div className='flex items-center justify-between gap-4 p-10'>
        <p className='text-2xl 2xl:text-3xl font-medium text-white'>
          Check your profile
        </p>
        <div className='bg-white p-2 rounded-full'>
          <IoIosArrowRoundForward className='text-foreground text-3xl -rotate-[30deg] duration-300' />
        </div>
      </div>
      <div className=' bg-[#f8f8f8] rounded-xl border-1.5 border-[#DBDBDB] p-10 flex justify-center flex-col gap-7 flex-grow'>
        <div className='flex items-center justify-between gap-1'>
          <p className='text-lg font-medium 2xl:text-xl'>Avg Sales Cycle</p>
          <div className='flex items-center justify-center gap-3 font-roobert-pro px-6 large:px-3 py-2 bg-[#ebebeb] rounded-xl w-[180px] large:w-[150px]'>
            <span>
              <RiLoopRightFill className='text-xl' />
            </span>
            <span className='max-w-[80px] w-full whitespace-nowrap text-center text-sm'>
              {salesCycle} Months
            </span>
          </div>
        </div>
        <div className='flex items-center justify-between gap-1'>
          <p className='text-lg font-medium 2xl:text-xl'>Avg Deal Size</p>
          <div className='flex items-center justify-center gap-2 font-roobert-pro px-6 large:px-3 py-2 bg-[#ebebeb] rounded-xl w-[180px] large:w-[150px]'>
            <span>
              <AiOutlineDollar className='text-xl' />
            </span>
            <span className='max-w-[80px] w-full whitespace-nowrap text-center text-sm'>
              {contractSize}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckProfile;
