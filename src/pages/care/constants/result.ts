import type { CareResultType } from "../types";

export const CARE_RESULT_TYPES = [
  "confirmed",
  "absent",
] as const satisfies readonly CareResultType[];

export const CARE_RESULT_TYPE_LABELS: Record<CareResultType, string> = {
  confirmed: "대상자확인",
  absent: "대상자부재",
};
