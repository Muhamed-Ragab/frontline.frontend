import { useAuthStore } from "@/stores/auth_store";
import { Link } from "react-router";

const EmptySalesPlaceholder = () => {
  const { isFirstSale } = useAuthStore();

  return (
    <div className='flex flex-col items-center justify-center gap-7'>
      <p className='text-3xl font-medium'>No Sales Yet !</p>
      <Link
        to={isFirstSale ? "/frontline-intro" : "/create-chat"}
        className='bg-customPrimary py-4 px-[22px] rounded-2xl text-sm font-medium duration-300 active:scale-95 hover:opacity-90'
      >
        Start Documenting
      </Link>
    </div>
  );
};

export default EmptySalesPlaceholder;
