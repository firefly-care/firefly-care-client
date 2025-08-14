import type { RegionStatusType } from "../types";
import {
  STATUS_TYPES,
  LAST_ACTIVITY_TYPES,
  ABNORMAL_SIGN_TYPES,
} from "../constants";

export const getSelectedKeys = (group: RegionStatusType) => {
  switch (group) {
    case "status":
      return STATUS_TYPES;
    case "lastActivity":
      return LAST_ACTIVITY_TYPES;
    default:
      return ABNORMAL_SIGN_TYPES;
  }
};
