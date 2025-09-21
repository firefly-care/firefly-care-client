import { useState, useEffect } from "react";
import type { InfoRow } from "@pages/register/types";
import { buildInfoTableData } from "../utils/buildInfoTableData";

export const useInfoTable = () => {
  const [tableData, setTableData] = useState<InfoRow[]>([]);

  useEffect(() => {
    setTableData(buildInfoTableData());
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    cellIndex: number,
  ) => {
    const newTableData = tableData.map((row, rIndex) => {
      if (rIndex !== rowIndex) {
        return row;
      }
      const newCells = row.cells.map((cell, cIndex) => {
        if (cIndex !== cellIndex) {
          return cell;
        }
        return { ...cell, value: e.target.value };
      });
      return { ...row, cells: newCells };
    });
    setTableData(newTableData);
  };

  return {
    tableData,
    handleInputChange,
  };
};
