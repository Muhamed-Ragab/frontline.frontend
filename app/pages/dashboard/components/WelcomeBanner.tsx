import { useAuthStore } from "@/stores/auth_store";
import { IoIosArrowRoundForward } from "react-icons/io";

const WelcomeBanner = () => {
  const { user } = useAuthStore();

  return (
    <div className='bg-[#262626] p-10 py-9 rounded-xl text-white h-full flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <h1 className='text-3xl 2xl:text-4xl font-medium font-clash-display'>
            Hello {user?.name} !
          </h1>
          <img
            className='w-10 h-10 rounded-full object-cover border-1.5 border-white'
            src={user?.image}
            alt=''
          />
        </div>
        <div className='bg-white p-2 rounded-full'>
          <IoIosArrowRoundForward className='text-foreground text-3xl -rotate-[30deg] duration-300' />
        </div>
      </div>
      <div className='flex-grow flex items-center'>
        <p className='mt-2 max-w-[700px] font-roobert-pro xl:text-lg 2xl:text-xl'>
          Let’s capture your success, celebrate your achievements, and showcase
          your dedication opening the door to even greater opportunities!
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
