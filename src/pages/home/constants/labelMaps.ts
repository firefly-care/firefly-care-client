import { GRADE_TYPE_LABELS } from "./grade";
import { LAST_ACTIVITY_TYPE_LABELS } from "./lastActivity";
import { ABNORMAL_SIGN_TYPE_LABELS } from "./abnormalSign";

// 하나로 합친 라벨 맵
export const LABEL_MAPS = {
  ...GRADE_TYPE_LABELS,
  ...LAST_ACTIVITY_TYPE_LABELS,
  ...ABNORMAL_SIGN_TYPE_LABELS,
};
