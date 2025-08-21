import type { RegionStatusGraphType } from "../types";
import {
  GRADE_TYPES,
  LAST_ACTIVITY_TYPES,
  ABNORMAL_SIGN_TYPES,
} from "../constants";

export const getSelectedKeys = (group: RegionStatusGraphType) => {
  switch (group) {
    case "status":
      return GRADE_TYPES;
    case "lastActivity":
      return LAST_ACTIVITY_TYPES;
    default:
      return ABNORMAL_SIGN_TYPES;
  }
};
