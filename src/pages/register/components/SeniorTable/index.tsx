import React from "react";
import * as S from "./index.styles";
import { RadioGroup as ChecklistRadioGroup } from "@/components/care/Checklist/index.styles";
import { useSeniorTable } from "./hooks/useSeniorTable";
import { SENSOR_OPTIONS } from "./constants";
import { placeholderOf } from "./utils/placeholderOf";
import type { SeniorTableProps } from "./types";

export const SeniorTable = ({ isEditing }: SeniorTableProps) => {
  const { tableData, handleInputChange, toggleSensor, handleResetSensor } = useSeniorTable();

  return (
    <>
      <S.SectionHeader>대상자 정보</S.SectionHeader>
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
                    {isEditing && cell.label === "성별" ? (
                      <ChecklistRadioGroup>
                        {["남성", "여성"].map(gender => (
                          <label key={gender}>
                            <input
                              type="radio"
                              name={`gender_${rowIndex}`}
                              value={gender}
                              checked={cell.value === gender}
                              onChange={e => handleInputChange(e, rowIndex, cellIndex)}
                            />{" "}
                            {gender}
                          </label>
                        ))}
                      </ChecklistRadioGroup>
                    ) : isEditing && cell.label === "센서 활성화" ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ChecklistRadioGroup>
                          {SENSOR_OPTIONS.map(opt => {
                            const selected = String(cell.value || "").split(", ").includes(opt);
                            return (
                              <label key={opt}>
                                <input
                                  type="checkbox"
                                  checked={selected}
                                  onChange={() => toggleSensor(rowIndex, cellIndex, opt)}
                                />{" "}
                                {opt}
                              </label>
                            );
                          })}
                        </ChecklistRadioGroup>
                        <S.ResetButton onClick={() => handleResetSensor(rowIndex, cellIndex)}>
                          초기화
                        </S.ResetButton>
                      </div>
                    ) : isEditing && typeof cell.value === 'string' ? (
                      <S.Input
                        value={cell.value}
                        placeholder={placeholderOf(cell.label)}
                        onChange={e => handleInputChange(e, rowIndex, cellIndex)}
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