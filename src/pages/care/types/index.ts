import type { CareType } from "@/types/care";
import type { CareResultType } from "@/types/care";

export type PageType = "calendar" | "list";

export type CareItemType = {
  id: string | number;
  name: string;
  manager: string;
  date: string;
  type: CareType;
  status: CareResultType;
  preview: string;
  createdAt: string;
};
