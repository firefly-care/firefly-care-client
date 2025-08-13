import { STATUS_LABEL_KR } from "./statusKeys";
import { LAST_ACTIVITY_LABEL_KR } from "./lastActivityKeys";
import { ABNORMAL_SIGN_LABEL_KR } from "./abnormalSignKeys";

// 하나로 합친 라벨 맵
export const LABEL_MAPS = {
  ...STATUS_LABEL_KR,
  ...LAST_ACTIVITY_LABEL_KR,
  ...ABNORMAL_SIGN_LABEL_KR,
};
