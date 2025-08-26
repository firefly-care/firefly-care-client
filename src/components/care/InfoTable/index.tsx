import React, { useState, useEffect } from 'react';
import type { InfoRow } from '@/pages/care-post/types';
import { TAB_TO_TITLE } from '@/pages/care-post/constants';
import * as S from './index.styles';

interface InfoTableProps {
  infoTableData: InfoRow[];
  tab: 'visit' | 'call' | 'emergency';
  isEditing?: boolean;
}

export const InfoTable = ({ infoTableData, tab }: InfoTableProps) => {
  const [tableData, setTableData] = useState(infoTableData);

  useEffect(() => {
    setTableData(infoTableData);
  }, [infoTableData]);

  return (
    <>
      <S.SectionHeader>
        반딧불이 돌봄 서비스 {TAB_TO_TITLE[tab]} 체크리스트
      </S.SectionHeader>
      <S.InfoTable>
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <S.TR key={rowIndex}>
              {rowData.cells.map((cell, cellIndex) => (
                <React.Fragment key={`${rowIndex}-${cellIndex}`}>
                  <S.TD className="label">
                    <span className="label">{cell.label}</span>
                  </S.TD>
                  <S.TD className="value" colSpan={cell.colSpan}>
                      {cell.value}
                  </S.TD>
                </React.Fragment>
              ))}
            </S.TR>
          ))}
        </tbody>
      </S.InfoTable>
    </>
  );
};
