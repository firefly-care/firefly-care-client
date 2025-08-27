import type { AbnormalSignType } from "@/pages/home/types";

export type SeniorItemType = {
  name: string;
  birth: string;
  contact: string;
  eupmyeondong: string;
  address: string;
  manager: string;
  managerContact: string;
  led: [boolean, boolean, boolean, boolean]; // [안방, 거실, 주방, 화장실]
  lastActive: number;
  anomaly: AbnormalSignType;
};
