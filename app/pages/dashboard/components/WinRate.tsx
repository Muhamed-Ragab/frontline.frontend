import { AiOutlineFire } from "react-icons/ai";

const WinRate = ({ rate }: { rate: number }) => {
  return (
    <div className='bg-[#1e1e1e] rounded-xl border-1.5 border-[#DBDBDB] relative min-h-28 row-span-1 h-full'>
      <div className='flex items-center justify-between gap-4 rounded-xl px-6 pr-8 h-full absolute top-0 -right-[1px] w-[98%] bg-[#F5F5F5]  border-1 border-[#DBDBDB]'>
        <div className='flex items-center gap-2'>
          <span>
            <AiOutlineFire className='text-[40px]' />
          </span>
          <span className='text-2xl 2xl:text-[28px] font-medium'>Win Rate</span>
        </div>
        <p className='text-4xl 2xl:text-[40px] font-medium font-roobert-pro'>
          {rate}%
        </p>
      </div>
    </div>
  );
};

export default WinRate;
