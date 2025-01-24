import { IoIosArrowForward } from "react-icons/io";

const NextPrevSwitcher = ({
  currentSale,
  switchSale,
  isSwitching,
}: {
  currentSale: number;
  switchSale: (page: number) => void;
  isSwitching: boolean;
}) => {
  return (
    <div>
      <button
        disabled={isSwitching}
        onClick={() => switchSale(currentSale - 1)}
        className='text-gray-500 hover:text-black rotate-180 absolute left-5 top-1/2 -translate-y-1/2 border-1.5 border-[#DBDBDB] p-2 rounded-full duration-300'
      >
        <span className='text-2xl '>
          <IoIosArrowForward />
        </span>
      </button>
      <button
        disabled={isSwitching}
        onClick={() => switchSale(currentSale + 1)}
        className='text-gray-500 hover:text-black absolute right-5 top-1/2 -translate-y-1/2 border-1.5 border-[#DBDBDB] p-2 rounded-full duration-300'
      >
        <span className='text-2xl'>
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
};

export default NextPrevSwitcher;
