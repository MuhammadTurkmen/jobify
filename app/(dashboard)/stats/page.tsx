import { getStatsAction, getChartsDataAction } from "@/utils/actions";
import ChartContainer from "@/components/ChartContainer";
import StatsContainer from "@/components/StatsContainer";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function StatsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
      <ChartContainer />
    </HydrationBoundary>
  );
}

export default StatsPage;
