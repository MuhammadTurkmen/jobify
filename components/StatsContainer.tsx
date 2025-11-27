"use client";
import { getStatsAction } from "@/utils/actions";
import StatsCard from "./StatsCard";
import { useQuery } from "@tanstack/react-query";

function StatsContainer() {
  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCard title="pending Jobs" value={data?.pending || 0} />
      <StatsCard title="interviews set" value={data?.interview || 0} />
      <StatsCard title="Jobs declined" value={data?.declined || 0} />
    </div>
  );
}

export default StatsContainer;
