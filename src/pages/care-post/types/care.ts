import type { ReactNode } from "react";

export type Tab = "visit" | "call" | "emergency";
export type ResultType = "present" | "absent";

export type Ternary = "" | "정상" | "주의" | "위급";
export type Binary = "" | "예" | "아니오";

export type InfoCell = {
  label: ReactNode;
  value: ReactNode;
  colSpan?: number;
  className?: string;
};
export type InfoRow = { cells: InfoCell[] };

export type CareBaseInfo = {
  date: string;
  contact: string;
  dob: string;
  gender: string;
  address: string;
  manager: string;
  managerContact: string;
};

export type PresentKeys = "health" | "meal" | "cognition" | "comm";
export type AbsentKeys =
  | "tried3Calls"
  | "checkedNeighbors"
  | "mailsPiled"
  | "guidedToCenter";