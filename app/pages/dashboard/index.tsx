import AsyncDataWrapper from "@/components/shared/AsyncDataWrapper";
import useGet from "@/hooks/api/useGet";
import type { SalesAnalytics } from "@/types/analytics";
import CheckProfile from "./components/CheckProfile";
import DocumentedSales from "./components/DocumentedSales";
import TotalPipeline from "./components/total-pipeline/TotalPipeline";
import TotalRevenue from "./components/TotalRevenue";
import WelcomeBanner from "./components/WelcomeBanner";
import WinRate from "./components/WinRate";

export default function DashboardPage() {
  const {
    data: analytics,
    loading,
    error,
  } = useGet<SalesAnalytics>({
    endpoint: "/sales/analytics",
    cacheKey: "analytics",
  });

  return (
    <section
      style={{
        gridTemplateRows: "1fr 2.71fr",
      }}
      className='container py-5 pt-0 mt-[5px] grid gap-[18px] flex-grow'
    >
      <AsyncDataWrapper
        isLoading={loading}
        isError={!!error}
        isSuccess={!!analytics}
      >
        {analytics && (
          <>
            <div className='grid grid-cols-7 gap-[18px]'>
              <div className='col-span-5'>
                <WelcomeBanner />
              </div>
              <div className='col-span-2'>
                <TotalRevenue totalRevenue={analytics.totalRevenue} />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-[18px]'>
              <div
                style={{
                  gridTemplateRows: "1fr 0.4237fr",
                }}
                className='grid gap-[18px] h-full'
              >
                <div>
                  <CheckProfile
                    salesCycle={analytics.averageSalesCycle}
                    contractSize={analytics.averageContractSize}
                  />
                </div>
                <div>
                  <WinRate rate={analytics.winRate} />
                </div>
              </div>
              <div>
                <TotalPipeline sales={analytics.sales} />
              </div>
              <div>
                <DocumentedSales sales={analytics.sales} />
              </div>
            </div>
          </>
        )}
      </AsyncDataWrapper>
    </section>
  );
}
