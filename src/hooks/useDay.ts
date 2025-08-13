import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const useDay = (initial?: Dayjs) => {
  const [day, setDay] = useState<Dayjs>(initial ?? dayjs());

  const moveToPrevDay = () => setDay((prev) => prev.subtract(1, "day"));
  const moveToNextDay = () => setDay((prev) => prev.add(1, "day"));
  const goToToday = () => setDay(dayjs());

  return {
    day: day.format("YYYY.MM.DD (ddd)"),
    raw: day,
    moveToPrevDay,
    moveToNextDay,
    goToToday,
    setDay,
  };
};
