import type { LastActivityType } from "../types/lastActivity";

export const LAST_ACTIVITY_TYPES = [
  "within_24h",
  "24_to_48h",
  "48_to_72h",
  "over_72h",
] as const satisfies readonly LastActivityType[];

export const LAST_ACTIVITY_TYPE_LABELS: Record<LastActivityType, string> = {
  within_24h: "0~24시간 전",
  "24_to_48h": "24~48시간 전",
  "48_to_72h": "48~72시간 전",
  over_72h: "72시간 전~",
};
