import React from "react";
import SirenIcon from "@assets/icons/common/siren.svg?react";
import VisitIcon from "@assets/icons/common/home-white.svg?react";
import CallIcon from "@assets/icons/common/call.svg?react";
import type { CareType } from "@/types/care";

export const COLOR_MAP: Record<CareType, "green" | "orange" | "red"> = {
  전화돌봄: "green",
  방문돌봄: "orange",
  긴급출동: "red",
};

export const getCareTypeIcon = (
  type: CareType,
  width = 24,
  height = 24
): React.ReactNode => {
  switch (type) {
    case "전화돌봄":
      return <CallIcon width={width} height={height} />;
    case "방문돌봄":
      return <VisitIcon width={width} height={height} />;
    case "긴급출동":
      return <SirenIcon width={width} height={height} />;
    default:
      return null;
  }
};

export const getCareTypeColor = (type: CareType) => COLOR_MAP[type];
