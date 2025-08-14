import type { StatusType } from "@/types/status";
import type { AbnormalSignType } from "@/types/abnormalSign";

export type PersonStatusType = {
  id: number;
  name: string;
  manager: string;
  level: StatusType;
  lastActive: string;
  abnormalSign: AbnormalSignType;
};
