import type { GradeType } from "@/types/grade";
import type { AbnormalSignType } from "@/types/sign";

export type PersonStatusType = {
  id: number;
  name: string;
  manager: string;
  level: GradeType;
  lastActive: string;
  abnormalSign: AbnormalSignType;
};
