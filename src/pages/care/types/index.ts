import type { CareType } from "@/types/care";

export type PageType = "calendar" | "list";
export type CareResultType = "confirmed" | "absent";

export type CareItemType = {
  id: string | number;
  name: string;
  manager: string;
  date: string;
  type: CareType;
  status: CareResultType;
  preview: string;
};
