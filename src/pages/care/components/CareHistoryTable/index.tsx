import { DataTable, type Column } from "@/components/DataTable";
import { ExcelDownloadButton } from "@components/ExcelDownloadButton";
import Sort from "@assets/icons/common/sort.svg?react";
import { CareTypeTag } from "@components/CareTypeTag"; // 기존에 만든 뱃지
import { CARE_RESULT_TYPE_LABELS } from "@/constants/care";
import type { CareItemType } from "../../types";
import { careListData } from "../../datas";
import { useNavigate } from "react-router-dom"; 

export function CareHistoryTable() {
  const navigate = useNavigate();

  const handleRowClick = (row: CareItemType) => {
    console.log("Navigating to", `/care-view/${row.id}`);
    navigate(`/care-view/${row.id}`);
  };

  const columns: Column<CareItemType>[] = [
    {
      id: "no",
      header: "번호",
      width: 70,
      accessor: (_row, index) => index + 1,
    },
    {
      id: "name",
      header: "대상자",
      width: 120,
      accessor: (r) => r.name,
    },
    {
      id: "manager",
      header: "담당자",
      width: 120,
      accessor: (r) => r.manager,
    },
    {
      id: "type",
      header: "돌봄 구분",
      width: 140,
      accessor: (r) => <CareTypeTag type={r.type} size="small" />,
    },
    {
      id: "status",
      header: "돌봄 결과",
      width: 140,
      accessor: (r) => CARE_RESULT_TYPE_LABELS[r.status],
    },
    {
      id: "date",
      header: "돌봄일",
      width: 140,
      accessor: (r) => r.date,
    },
    {
      id: "createdAt",
      header: "등록일",
      width: 140,
      accessor: (r) => r.createdAt,
    },
  ];

  return (
    <DataTable<CareItemType>
      data={careListData}
      columns={columns}
      getRowKey={(r) => r.id}
      onRowClick={handleRowClick}
      topLeft={<span>전체 {careListData.length}건</span>}
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
      compact={false}
    />
  );
}
