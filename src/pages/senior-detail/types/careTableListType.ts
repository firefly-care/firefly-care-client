import type { CareType } from "@/types/care";
import type { GradeType } from "@/types/grade";

export interface CareTableListType {
  date: string;
  tagLabel: CareType;
  result: GradeType;
}
