import { useState, useEffect } from "react";
import type { InfoRow } from "@pages/register/types";
import { buildSeniorTableData } from "../utils/buildSeniorTableData";

export const useSeniorTable = () => {
  const [tableData, setTableData] = useState<InfoRow[]>([]);

  useEffect(() => {
    setTableData(buildSeniorTableData());
  }, []);

  const setCellValue = (rowIndex: number, cellIndex: number, next: string) => {
    setTableData(prev =>
      prev.map((row, r) =>
        r !== rowIndex
          ? row
          : { ...row, cells: row.cells.map((cell, c) => (c !== cellIndex ? cell : { ...cell, value: next })) }
      )
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    cellIndex: number
  ) => setCellValue(rowIndex, cellIndex, e.target.value);

  const toggleSensor = (rowIndex: number, cellIndex: number, opt: string) => {
    const cur = String(tableData[rowIndex].cells[cellIndex].value || "");
    const parts = cur ? cur.split(", ").filter(Boolean) : [];
    const next = parts.includes(opt) ? parts.filter(x => x !== opt) : [...parts, opt];
    setCellValue(rowIndex, cellIndex, next.join(", "));
  };

  const handleResetSensor = (rowIndex: number, cellIndex: number) => {
    setCellValue(rowIndex, cellIndex, "");
  };

  return {
    tableData,
    handleInputChange,
    toggleSensor,
    handleResetSensor,
  };
};
