import { STATUS_TYPE_LABELS } from "./status";
import { LAST_ACTIVITY_TYPE_LABELS } from "./lastActivity";
import { ABNORMAL_SIGN_TYPE_LABEL } from "./abnormalSign";

// 하나로 합친 라벨 맵
export const LABEL_MAPS = {
  ...STATUS_TYPE_LABELS,
  ...LAST_ACTIVITY_TYPE_LABELS,
  ...ABNORMAL_SIGN_TYPE_LABEL,
};
