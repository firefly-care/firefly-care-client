import type { ReactNode } from "react";
import type { InfoRow, Tab, CareBaseInfo } from "../types";
import { TAB_TO_TITLE } from "../constants";
import { DEFAULT_CARE_INFO } from "../datas";

type Args = {
  tab: Tab;
  targetValue: ReactNode;
  tabToTitle?: Record<Tab, string>;
  baseInfo?: CareBaseInfo;
};

export function buildInfoTableData({
  tab,
  targetValue,
  tabToTitle = TAB_TO_TITLE,
  baseInfo = DEFAULT_CARE_INFO,
}: Args): InfoRow[] {
  const i = baseInfo;
  return [
    {
      cells: [
        { label: "돌봄 일시", value: i.date },
        { label: "돌봄 내역", value: tabToTitle[tab] },
      ],
    },
    {
      cells: [
        { label: "대상자", value: targetValue },
        { label: "연락처", value: i.contact },
      ],
    },
    {
      cells: [
        { label: "생년월일", value: i.dob },
        { label: "성별", value: i.gender },
      ],
    },
    {
      cells: [
        { label: "주소", value: i.address, colSpan: 3 },
      ],
    },
    {
      cells: [
        { label: "돌봄 담당자", value: i.manager },
        { label: "연락처", value: i.managerContact },
      ],
    },
  ];
}
