import { useQuery } from "@tanstack/react-query";
import { FetchSeniorAPI } from "@apis/senior";
import { useSeniorStore } from "@/stores/senior";
import type { SeniorItemType } from "@/pages/senior/types";
import { SeniorAdapter } from "@apis/senior/adapters";

export const useSeniorList = () => {
  const setSeniorList = useSeniorStore((s) => s.setSeniorList);

  return useQuery<SeniorItemType[], Error>({
    queryKey: ["seniorList"],
    queryFn: async () => {
      const response = await FetchSeniorAPI();
      if ("data" in response) {
        const list = SeniorAdapter.adaptList(response.data);
        setSeniorList(list);
        return list;
      }

      setSeniorList([]);
      throw new Error(response.message);
    },
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
    retry: 1,
    placeholderData: [],
  });
};
