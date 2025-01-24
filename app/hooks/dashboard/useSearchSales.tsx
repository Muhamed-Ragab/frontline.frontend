import { useAuthStore } from "@/stores/auth_store";
import type { Sale, SalesAnalytics } from "@/types/analytics";
import { useClickAway } from "ahooks";
import { useEffect, useRef, useState } from "react";
import useGet from "../api/useGet";

const useSearchSales = () => {
  const { setAuth } = useAuthStore();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredSales, setFilteredSales] = useState<Sale[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(() => {
    setIsFocused(false);
  }, ref);

  const { data, loading } = useGet<SalesAnalytics>({
    endpoint: "/sales/analytics",
    cacheKey: "analytics",
    requestOptions: {
      onSuccess(data) {
        if (!data) return;
        setFilteredSales(data.sales);
      },
    },
  });

  useEffect(() => {
    if (!data) return;

    setAuth({ isFirstSale: data?.sales?.length === 0 });
  }, [data]);

  useEffect(() => {
    if (!isFocused || !data) return;

    if (search === "") return setFilteredSales(data?.sales || []);

    setFilteredSales(
      data?.sales?.filter(sale =>
        sale.companyName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return {
    isFocused,
    setIsFocused,
    search,
    setSearch,
    filteredSales,
    ref,
    loading,
    data,
  };
};

export default useSearchSales;
