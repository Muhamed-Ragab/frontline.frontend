import useSearchSales from "@/hooks/dashboard/useSearchSales";
import { cn } from "@nextui-org/theme";
import { IoSearch } from "react-icons/io5";
import SalesList from "./SalesList";

const SalesSearch = () => {
  const {
    isFocused,
    setIsFocused,
    search,
    setSearch,
    filteredSales,
    ref,
    data,
    loading,
  } = useSearchSales();

  return (
    <div ref={ref} className='w-fit h-fit relative'>
      <span className='absolute left-2.5 top-1/2 -translate-y-1/2'>
        <IoSearch className='text-2xl text-foreground-secondary' />
      </span>
      <input
        type='text'
        value={search}
        disabled={!data || loading}
        onChange={e => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        placeholder='Search your sales'
        className={cn(
          "w-[331px] border-1.5 border-[#DBDBDB] bg-[#f8f8f8] px-10 py-2 rounded-2xl focus:outline-0 hover:outline-o duration-300",
          isFocused && "w-[390px]",
          (!data || loading) && "cursor-not-allowed opacity-50"
        )}
      />
      {isFocused && <SalesList sales={filteredSales} />}
    </div>
  );
};

export default SalesSearch;
