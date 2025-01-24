import { useAuthStore } from "@/stores/auth_store";
import { Link } from "react-router";

const EmptyPipelinePlaceholder = () => {
  const { isFirstSale } = useAuthStore();

  return (
    <div className='bg-[#e9e9e9] px-5 py-5 flex items-center justify-between gap-1 rounded-3xl duration-300 min-h-20'>
      <p className='text-sm duration-300 large:text-xs'>
        You Don’t have any Pipelines
      </p>
      <Link
        to={isFirstSale ? "/frontline-intro" : "/create-chat"}
        className='bg-[#1E1E1E] text-white px-7 py-3 rounded-xl text-xs active:scale-95 hover:opacity-90 duration-300 whitespace-nowrap'
      >
        Add Some
      </Link>
    </div>
  );
};

export default EmptyPipelinePlaceholder;
