import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export const Container = styled.div`
  width: 100%;
  .react-calendar {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 16px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 0 transparent;
  }

  /* 요일 헤더 */
  .react-calendar__month-view__weekdays {
    background: ${({ theme }) => theme.colors.orange[100]};
    text-align: center;
    abbr {
      text-decoration: none;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }

  /* 주간 가로 라인 */
  .react-calendar__month-view__weeks__week {
    border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }
  .react-calendar__month-view__weeks__week:first-child {
    border-top: none;
  }

  /* 날짜 기본 타일 */
  .react-calendar__tile {
    padding: 25px 0;
    color: ${({ theme }) => theme.colors.gray[800]};
    position: relative;
  }

  /* 오늘 표시 제거(원한다면 강조 가능) */
  .react-calendar__tile--now {
    background: transparent;
  }

  /* 선택된 날짜: 주황 원형 */
  .react-calendar__tile--active {
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
  }
  .react-calendar__tile--active:focus {
    background: transparent !important;
    outline: none;
  }
  .react-calendar__tile--active > abbr {
    position: relative;
    z-index: 1;
  }
  .react-calendar__tile--active::before {
    content: "";
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.orange[500]};
    z-index: 0;
  }

  /* hover 효과(선택 전) */
  .react-calendar__tile:enabled:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
    border-radius: 8px;
  }

  /* 일요일 빨간색 */
  .react-calendar__tile.is-sun {
    color: ${({ theme }) => theme.colors.red[500]};
  }

  /* 이전/다음 달 날짜 흐리게 */
  .react-calendar__tile.is-out {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
