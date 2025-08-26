import React from "react";
import * as S from "./index.styles";
import {
  TERNARY_OPTIONS,
  BINARY_OPTIONS,
  CALL_CHECKLIST,
  PRESENT_ABSENT_CHECKLIST,
} from "@/pages/care-post/constants";
import type { Ternary, Binary, PresentKeys, AbsentKeys } from "@/pages/care-post/types";
import type { CareType, CareResultType } from "@/types/care";

interface ChecklistProps {
  tab: CareType;
  resultType: CareResultType;
  setResultType: (resultType: CareResultType) => void;
  present: Record<PresentKeys, Ternary>;
  setPresent: React.Dispatch<
    React.SetStateAction<Record<PresentKeys, Ternary>>
  >;
  absent: Record<AbsentKeys, Binary>;
  setAbsent: React.Dispatch<React.SetStateAction<Record<AbsentKeys, Binary>>>;
  call: Record<PresentKeys, Ternary>;
  setCall: React.Dispatch<React.SetStateAction<Record<PresentKeys, Ternary>>>;
  isEditing: boolean; // isEditing 다시 추가
}

export const Checklist = ({
  tab,
  resultType,
  setResultType,
  present,
  setPresent,
  absent,
  setAbsent,
  call,
  setCall,
  isEditing, // isEditing 다시 추가
}: ChecklistProps) => {
  return (
    <>
      <S.ResultTitleRow>돌봄 결과</S.ResultTitleRow>
      <S.ChecklistTable>
        <colgroup>
          <col style={{ width: "18%" }} />
          <col style={{ width: "32%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <tbody>
          {tab === "call" && (
            <>
              <S.TR>
                <S.TD colSpan={4} className="radio-container">
                  대상자 확인
                </S.TD>
              </S.TR>
              {CALL_CHECKLIST.map(({ label, key }) => (
                <S.TR key={key}>
                  <S.TD className="label">{label}</S.TD>
                  <S.TD className="value" colSpan={3}>
                    <S.RadioGroup $disabled={!isEditing}>
                      {TERNARY_OPTIONS.map((v) => (
                        <label key={v}>
                          <input
                            type="radio"
                            name={`call_${key}`}
                            disabled={!isEditing}
                            checked={call[key] === v}
                            onChange={() =>
                              setCall((s) => ({ ...s, [key]: v }))
                            }
                          />{" "}
                          {v}
                        </label>
                      ))}
                    </S.RadioGroup>
                  </S.TD>
                </S.TR>
              ))}
            </>
          )}

          {tab !== "call" && (
            <>
              <S.TR>
                <S.TD colSpan={2} className="radio-container">
                  <S.RadioGroup>
                    <label>
                      <input
                        type="radio"
                        name="resultType"
                        disabled={!isEditing}
                        checked={resultType === "confirmed"}
                        onChange={() => setResultType("confirmed")}
                      />{" "}
                      대상자 확인
                    </label>
                  </S.RadioGroup>
                </S.TD>
                <S.TD colSpan={2} className="radio-container">
                  <S.RadioGroup>
                    <label>
                      <input
                        type="radio"
                        name="resultType"
                        disabled={!isEditing}
                        checked={resultType === "absent"}
                        onChange={() => setResultType("absent")}
                      />{" "}
                      대상자 부재
                    </label>
                  </S.RadioGroup>
                </S.TD>
              </S.TR>

              {PRESENT_ABSENT_CHECKLIST.map(({ present: p, absent: a }) => (
                <S.TR key={p.key}>
                  <S.TD className="label">{p.label}</S.TD>
                  <S.TD className="value">
                    <S.RadioGroup $disabled={!isEditing || resultType !== "confirmed"}>
                      {TERNARY_OPTIONS.map((v) => (
                        <label key={v}>
                          <input
                            type="radio"
                            name={`present_${p.key}`}
                            disabled={!isEditing || resultType !== "confirmed"}
                            checked={present[p.key] === v}
                            onChange={() =>
                              setPresent((s) => ({ ...s, [p.key]: v }))
                            }
                          />{" "}
                          {v}
                        </label>
                      ))}
                    </S.RadioGroup>
                  </S.TD>

                  <S.TD className="label">{a.label}</S.TD>
                  <S.TD className="value">
                    <S.RadioGroup $disabled={!isEditing || resultType !== "absent"}>
                      {BINARY_OPTIONS.map((v) => (
                        <label key={v}>
                          <input
                            type="radio"
                            name={`absent_${a.key}`}
                            disabled={!isEditing || resultType !== "absent"}
                            checked={absent[a.key] === v}
                            onChange={() =>
                              setAbsent((s) => ({ ...s, [a.key]: v }))
                            }
                          />{" "}
                          {v}
                        </label>
                      ))}
                    </S.RadioGroup>
                  </S.TD>
                </S.TR>
              ))}
            </>
          )}
        </tbody>
      </S.ChecklistTable>
    </>
  );
};
