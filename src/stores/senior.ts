import { create } from "zustand";
import type { SeniorItemType } from "@/pages/senior/types";

interface SeniorState {
  seniorList: SeniorItemType[];
  setSeniorList: (items: SeniorItemType[]) => void;
  clear: () => void;
}

export const useSeniorStore = create<SeniorState>((set) => ({
  seniorList: [],
  setSeniorList: (items) => set({ seniorList: items }),
  clear: () => set({ seniorList: [] }),
}));
