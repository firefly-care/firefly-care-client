import type { RegionStatusType } from "../types";
import {
  STATUS_KEYS,
  LAST_ACTIVITY_KEYS,
  ABNORMAL_SIGN_KEYS,
} from "../constants";

export const getSelectedKeys = (group: RegionStatusType) => {
  switch (group) {
    case "위기 등급":
      return STATUS_KEYS;
    case "마지막 활동":
      return LAST_ACTIVITY_KEYS;
    default:
      return ABNORMAL_SIGN_KEYS;
  }
};
