import React from "react";
import * as S from "./index.styles";
import { RadioGroup as ChecklistRadioGroup } from "@/components/care/Checklist/index.styles";
import { useInfoTable } from "./hooks/useInfoTable";
import type { InfoTableProps } from "./types";

export const InfoTable = ({ isEditing }: InfoTableProps) => {
  const { tableData, handleInputChange } = useInfoTable();

  return (
    <>
      <S.SectionHeader>담당자 정보</S.SectionHeader>
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
                    {isEditing && cell.label === '성별' ? (
                      <ChecklistRadioGroup>
                        {['남', '여'].map((gender) => (
                          <label key={gender}>
                            <input
                              type="radio"
                              name={`gender_${rowIndex}-${cellIndex}`}
                              value={gender}
                              checked={cell.value === gender}
                              onChange={(e) =>
                                handleInputChange(e, rowIndex, cellIndex)
                              }
                            />{' '}
                            {gender}
                          </label>
                        ))}
                      </ChecklistRadioGroup>
                    ) : isEditing && typeof cell.value === 'string' ? (
                      <S.Input
                        value={cell.value}
                        placeholder={String(cell.label)}
                        onChange={(e) =>
                          handleInputChange(e, rowIndex, cellIndex)
                        }
                      />
                    ) : (
                      cell.value
                    )}
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