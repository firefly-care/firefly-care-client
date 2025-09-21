import type { ReactNode } from "react";

export type InfoCell = {
  label: ReactNode;
  value: ReactNode;
  colSpan?: number;
  className?: string;
};
export type InfoRow = { cells: InfoCell[] };
