import React from "react";
import SirenIcon from "@assets/icons/common/siren.svg?react";
import VisitIcon from "@assets/icons/common/home-white.svg?react";
import CallIcon from "@assets/icons/common/call.svg?react";
import type { CareType } from "@/types/care";

export const COLOR_MAP: Record<CareType, "green" | "orange" | "red"> = {
  call: "green",
  visit: "orange",
  emergency: "red",
};

export const getCareTypeIcon = (
  type: CareType,
  width = 24,
  height = 24
): React.ReactNode => {
  switch (type) {
    case "call":
      return <CallIcon width={width} height={height} />;
    case "visit":
      return <VisitIcon width={width} height={height} />;
    case "emergency":
      return <SirenIcon width={width} height={height} />;
    default:
      return null;
  }
};

export const getCareTypeColor = (type: CareType) => COLOR_MAP[type];
