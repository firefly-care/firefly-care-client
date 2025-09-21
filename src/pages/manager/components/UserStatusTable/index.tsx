import React, { useState } from "react";
import * as S from "./index.styles";
import type { CareRecipient } from "../../types";
import { ExcelDownloadButton } from "@/components/ExcelDownloadButton";

interface UserStatusTableProps {
  items: CareRecipient[];
}

type TabKey = "recipients" | "call" | "visit";

export const UserStatusTable: React.FC<UserStatusTableProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<TabKey>("recipients");

  // 데모용 데이터 (전화/방문 탭에서 사용)
  const careDate = "2025년 7월 1일";

  return (
    <S.TableSection>
      <S.TopBar>
        <S.Tabs role="tablist" aria-label="care-tabs">
          <S.TabButton
            role="tab"
            aria-selected={activeTab === "recipients"}
            $active={activeTab === "recipients"}
            onClick={() => setActiveTab("recipients")}
          >
            담당 대상자
          </S.TabButton>
          <S.TabButton
            role="tab"
            aria-selected={activeTab === "call"}
            $active={activeTab === "call"}
            onClick={() => setActiveTab("call")}
          >
            전화 돌봄 내역
          </S.TabButton>
          <S.TabButton
            role="tab"
            aria-selected={activeTab === "visit"}
            $active={activeTab === "visit"}
            onClick={() => setActiveTab("visit")}
          >
            방문 돌봄 내역
          </S.TabButton>
        </S.Tabs>
        <S.ExcelBox>
          <ExcelDownloadButton text="엑셀 다운로드" onClick={() => {}} />
        </S.ExcelBox>
      </S.TopBar>

      <S.TableWrapper>
        <S.Table>
          {/* ▼ 헤더 */}
          <S.Thead>
            {activeTab === "recipients" ? (
              <tr>
                <th>이름</th>
                <th>성별</th>
                <th>나이</th>
                <th>주소</th>
              </tr>
            ) : (
              <tr>
                <th>이름</th>
                <th>성별</th>
                <th>나이</th>
                <th>돌봄 일자</th>
                <th>돌봄 결과</th>
              </tr>
            )}
          </S.Thead>

          {/* ▼ 바디 */}
          <S.Tbody>
            {items.map((r, i) => {
              if (activeTab === "recipients") {
                return (
                  <tr key={r.id}>
                    <td className="left">{r.name}</td>
                    <td>{r.gender}</td>
                    <td>{r.age}</td>
                    <td className="left">{r.address}</td>
                  </tr>
                );
              }

              const isMissed = i % 3 === 0;
              return (
                <tr key={r.id}>
                  <td className="left">{r.name}</td>
                  <td>{r.gender}</td>
                  <td>{r.age}</td>
                  <td>{careDate}</td>
                  <td>
                    <S.ResultBadge $variant={isMissed ? "danger" : "neutral"}>
                      {isMissed ? "대상자 미수신" : "대상자 확인"}
                    </S.ResultBadge>
                  </td>
                </tr>
              );
            })}
          </S.Tbody>
        </S.Table>
      </S.TableWrapper>
    </S.TableSection>
  );
};
