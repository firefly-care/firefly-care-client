import {
  DataTable,
  type Column,
  type ColumnGroup,
} from "@/components/DataTable";
import { ExcelDownloadButton } from "@components/ExcelDownloadButton";
import Sort from "@assets/icons/common/sort.svg?react";
import BulbOn from "@assets/icons/common/bulb_on.svg?react";
import BulbOff from "@assets/icons/common/bulb_off.svg?react";
import type { SeniorItemType } from "../../types";
import { SIGN_TYPE_LABELS } from "@/constants/sign";

type SeniorTableProps = {
  data: SeniorItemType[];
  onRowClick?: (row: SeniorItemType) => void;
};

export function SeniorTable({ data, onRowClick }: SeniorTableProps) {
  console.log("data:", data);
  const baseCols: Column<SeniorItemType>[] = [
    {
      id: "no",
      header: "번호",
      width: 40,
      accessor: (_row, i) => i + 1,
    },
    { id: "target", header: "이름", width: 70, accessor: (r) => r.name },
    {
      id: "birth",
      header: "생년월일",
      width: 100,
      accessor: (r) => r.birth,
    },
    {
      id: "contact",
      header: "연락처",
      width: 120,
      accessor: (r) => r.contact,
    },
    {
      id: "emd",
      header: "읍면동",
      width: 70,
      accessor: (r) => r.eupmyeondong,
    },
    {
      id: "addr",
      header: "주소",
      width: 240,
      accessor: (r) => r.address,
    },
    { id: "manager", header: "담당자", width: 70, accessor: (r) => r.manager },
    {
      id: "managerContact",
      header: "담당자 연락처",
      width: 120,
      accessor: (r) => r.managerContact,
    },
  ];

  // LED 그룹 하위 컬럼
  const ledCols: Column<SeniorItemType>[] = [
    {
      id: "bed",
      header: (
        <span
          style={{ minWidth: 36, display: "inline-block", textAlign: "center" }}
        >
          안방
        </span>
      ),
      width: 56,
      accessor: (r) =>
        r.led[0] ? (
          <BulbOn width={22} height={22} style={{ margin: "0 auto" }} />
        ) : (
          <BulbOff width={16} height={16} style={{ margin: "0 auto" }} />
        ),
    },
    {
      id: "living",
      header: (
        <span
          style={{ minWidth: 36, display: "inline-block", textAlign: "center" }}
        >
          거실
        </span>
      ),
      width: 56,
      accessor: (r) =>
        r.led[1] ? (
          <BulbOn width={22} height={22} style={{ margin: "0 auto" }} />
        ) : (
          <BulbOff width={16} height={16} style={{ margin: "0 auto" }} />
        ),
    },
    {
      id: "kitchen",
      header: (
        <span
          style={{ minWidth: 36, display: "inline-block", textAlign: "center" }}
        >
          주방
        </span>
      ),
      width: 56,
      accessor: (r) =>
        r.led[2] ? (
          <BulbOn width={22} height={22} style={{ margin: "0 auto" }} />
        ) : (
          <BulbOff width={16} height={16} style={{ margin: "0 auto" }} />
        ),
    },
    {
      id: "bath",
      header: (
        <span
          style={{ minWidth: 36, display: "inline-block", textAlign: "center" }}
        >
          화장실
        </span>
      ),
      width: 56,
      accessor: (r) =>
        r.led[3] ? (
          <BulbOn width={22} height={22} style={{ margin: "0 auto" }} />
        ) : (
          <BulbOff width={16} height={16} style={{ margin: "0 auto" }} />
        ),
    },
  ];

  // 오른쪽 나머지 컬럼
  const tailCols: Column<SeniorItemType>[] = [
    {
      id: "lastActive",
      header: "마지막 활동 시간",
      width: 120,
      accessor: (r) => r.lastActive + "시간 전",
    },
    {
      id: "result",
      header: "이상 징후",
      width: 120,
      accessor: (r) => SIGN_TYPE_LABELS[r.anomaly],
    },
  ];

  const columns: Array<Column<SeniorItemType> | ColumnGroup<SeniorItemType>> = [
    ...baseCols,
    {
      id: "ledGroup",
      header: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>LED On/Off</span>
        </div>
      ),
      columns: ledCols,
    },
    ...tailCols,
  ];

  return (
    <DataTable<SeniorItemType>
      data={data}
      columns={columns}
      getRowKey={(r) => r.name}
      onRowClick={onRowClick}
      topLeft={<span>전체 {data.length}건</span>}
      topRight={
        <>
          <ExcelDownloadButton text="엑셀 다운로드" onClick={() => {}} />
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            최신순 <Sort />
          </span>
        </>
      }
      stickyHeader
      zebra
    />
  );
}
