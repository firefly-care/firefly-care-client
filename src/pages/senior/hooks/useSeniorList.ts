import { useQuery } from "@tanstack/react-query";
import { FetchSeniorAPI } from "@apis/senior";
import { useSeniorStore } from "@/stores/senior";
import type { SeniorItemType } from "@/pages/senior/types";
import { SeniorAdapter } from "@apis/senior/adapters";

export const useSeniorList = () => {
  const setSeniorList = useSeniorStore((s) => s.setSeniorList);
  const seniorList = useSeniorStore((s) => s.seniorList);
  return useQuery<SeniorItemType[], Error, SeniorItemType[], ["seniorList"]>({
    queryKey: ["seniorList"],
    queryFn: async () => {
      const data = await FetchSeniorAPI();
      const list = SeniorAdapter.adaptList(data);
      setSeniorList(list);
      return list;
    },
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
    retry: 1,
  });
};
