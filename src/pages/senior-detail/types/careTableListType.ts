import type { CareType } from "@/types/care";
import type { StatusType } from "@/types/status";

export interface CareTableListType {
  date: string;
  tagLabel: CareType;
  result: StatusType;
}
