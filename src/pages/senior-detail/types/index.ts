import type { CareType } from "@/types/care";
import type { GradeType } from "@/types/grade";
import type { SignType } from "@/types/sign";

export type CareTableListType = {
  date: string;
  tagLabel: CareType;
  result: GradeType;
};

export type SignGraphDataType = {
  label: SignType;
  value: number;
};
