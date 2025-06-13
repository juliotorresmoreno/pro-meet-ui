import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { getNotifications } from "@/services/notifications";

export const useNotifications = (token: string, skip: number, take: number) => {
  const [cachedData, setCachedData] =
    useState<Awaited<ReturnType<typeof getNotifications>>>();

  const query = useQuery({
    queryKey: ["notifications", token, skip, take],
    queryFn: () => getNotifications({ skip, take }, token),
    enabled: !!token,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  useEffect(() => {
    if (query.data) {
      setCachedData(query.data);
    }
  }, [query.data]);

  return {
    ...query,
    data: query.isLoading ? cachedData : query.data,
  };
};
