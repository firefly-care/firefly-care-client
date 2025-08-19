import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export const useMonth = () => {
  const [month, setMonth] = useState<Dayjs>(dayjs());

  const moveToPrevMonth = () => {
    setMonth((prev) => prev.subtract(1, "month"));
  };

  const moveToNextMonth = () => {
    setMonth((prev) => prev.add(1, "month"));
  };

  return {
    month: month.format("YYYY.MM"),
    originMonth: month,
    moveToPrevMonth,
    moveToNextMonth,
    setMonth,
  };
};
