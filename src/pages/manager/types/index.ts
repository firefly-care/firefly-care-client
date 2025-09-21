export type Gender = "남" | "여";

export type CareRecipient = {
  id: string;
  name: string;
  gender: Gender;
  age: string;  
  address: string;
};

export type ManagerType = {
  id: string;
  name: string;
  todayCalls: number;
  specialCount: number;
  lastCallAgo: string;
  avatar?: string;
  recipients: CareRecipient[];
};
