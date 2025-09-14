import { GRADE_TYPE_LABELS } from "@/constants/grade";
import { LAST_ACTIVITY_TYPE_LABELS } from "./lastActivity";
import { SIGN_TYPE_LABELS } from "@/constants/sign";

// 하나로 합친 라벨 맵
export const LABEL_MAPS = {
  ...GRADE_TYPE_LABELS,
  ...LAST_ACTIVITY_TYPE_LABELS,
  ...SIGN_TYPE_LABELS,
};
