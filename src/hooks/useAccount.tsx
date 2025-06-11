import { useQuery } from "@tanstack/react-query";
import { getAccount } from "@/services/account";

export const useAccount = (token: string) => {
  return useQuery({
    queryKey: ["account"],
    queryFn: () => getAccount(token),
    enabled: !!token,
  });
};
