import { useState } from "react";

const useSaleSwitcher = (salesAmount: number) => {
  const [isSwitching, setIsSwitching] = useState(false);
  const [currentSale, setCurrentSale] = useState(0);

  const switchSale = (page: number) => {
    if (salesAmount <= 1) return;
    setIsSwitching(true);

    setTimeout(() => {
      if (page > salesAmount - 1) {
        setCurrentSale(0);
      } else if (page < 0) {
        setCurrentSale(salesAmount - 1);
      } else {
        setCurrentSale(page);
      }
      setIsSwitching(false);
    }, 500);
  };

  // useEffect(() => {
  //   if (salesAmount <= 1) return;
  //   const interval = setInterval(() => {
  //     const targetSale = currentSale === salesAmount - 1 ? 0 : currentSale + 1;

  //     switchSale(targetSale);
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [currentSale]);

  return { isSwitching, currentSale, switchSale };
};

export default useSaleSwitcher;
