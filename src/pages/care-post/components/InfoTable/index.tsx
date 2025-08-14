import React from 'react';
import type { InfoRow } from '../../types';
import { TAB_TO_TITLE } from '../../constants';
import * as S from './index.styles';

interface InfoTableProps {
  infoTableData: InfoRow[];
  tab: 'visit' | 'call' | 'emergency';
}

export const InfoTable = ({ infoTableData, tab }: InfoTableProps) => {
  return (
    <>
      <S.SectionHeader>
        반딧불이 돌봄 서비스 {TAB_TO_TITLE[tab]} 체크리스트
      </S.SectionHeader>
      <S.InfoTable>
        <tbody>
          {infoTableData.map((rowData, rowIndex) => (
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
