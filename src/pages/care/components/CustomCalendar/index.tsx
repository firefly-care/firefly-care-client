import { useMemo } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import * as S from "./index.styles";
import type { Dayjs } from "dayjs";

type Single = Date;

interface CustomCalendarProps {
  value: Single | null;
  onChange: (v: Single | null) => void; // 변경 콜백
  month: Dayjs;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

function toCalendarValue(v: Single | null): Date | undefined {
  return v ?? undefined;
}

export function CustomCalendar({
  value,
  onChange,
  month,
  minDate,
  maxDate,
  className,
}: CustomCalendarProps) {
  const calendarValue = useMemo(() => toCalendarValue(value), [value]);
  const monthStart = useMemo(
    () => dayjs(month).startOf("month").toDate(),
    [month]
  );

  return (
    <S.Container className={className}>
      <Calendar
        value={calendarValue} // Date | undefined
        onChange={(val) => {
          const picked = Array.isArray(val)
            ? val[0] ?? null
            : (val as Date | null);
          if (!picked) return onChange(null);
          if (value && dayjs(value).isSame(picked, "day")) onChange(null);
          else onChange(picked);
        }}
        selectRange={false}
        showNavigation={false}
        calendarType="gregory"
        locale="ko-KR"
        minDate={minDate}
        maxDate={maxDate}
        activeStartDate={monthStart}
        view="month"
        formatDay={(_, date) => String(date.getDate())}
        next2Label={null}
        prev2Label={null}
        tileClassName={({ date, view }) => {
          const classes: string[] = [];
          if (date.getDay() === 0) classes.push("is-sun");
          if (view === "month" && date.getMonth() !== monthStart.getMonth()) {
            classes.push("is-out");
          }
          return classes.join(" ");
        }}
      />
    </S.Container>
  );
}
