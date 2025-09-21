import React from "react";
import * as S from "./index.styles";
import type { ManagerType } from "../../types";

type Props = {
  data: ManagerType;
  selected?: boolean;
  onClick?: () => void;
};

export const ManagerCard: React.FC<Props> = ({ data, selected, onClick }) => (
  <S.Card $interactive $selected={selected} onClick={onClick}>
    <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
      <S.Avatar />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 800 }}>{data.name}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gridTemplateColumns: "auto 1fr auto 1fr",
            gap: 6,
            marginTop: 8,
          }}
        >
          <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', gap: 25 }}>
            <S.Label>대상자 수</S.Label>
            <S.Value>NN명</S.Value>
          </div>
          <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', gap: 25 }}>
            <S.Label>특별 건수</S.Label>
            <S.Value>NN건</S.Value>
          </div>
          <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', gap: 25 }}>
            <S.Label>최근 돌봄</S.Label>
            <S.Value>{data.lastCallAgo}</S.Value>
          </div>
        </div>
      </div>
    </div>
  </S.Card>
);
