import type { PageType } from "../types";
import CalendarIcon from "@assets/icons/care/calendar.svg?react";
import ListIcon from "@assets/icons/care/list.svg?react";

export const getPageTypeIcon = (
  type: PageType,
  width = 14,
  height = 14
): React.ReactNode => {
  switch (type) {
    case "calendar":
      return <CalendarIcon width={width} height={height} />;
    case "list":
      return <ListIcon width={width} height={height} />;
    default:
      return null;
  }
};

export const getPageTypeLabel = (type: PageType) => {
  switch (type) {
    case "calendar":
      return "캘린더형";
    case "list":
      return "리스트형";
    default:
      return null;
  }
};
