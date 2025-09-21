import React from "react";
import * as S from "./index.styles";
import { ManagerCard } from "../ManagerCard";
import type { ManagerType } from "../../types";

interface LeftPaneProps {
  query: string;
  setQuery: (query: string) => void;
  filtered: ManagerType[];
  selectedManager: ManagerType | undefined;
  setSelected: (id: string) => void;
}

export const LeftPaneComponent: React.FC<LeftPaneProps> = ({
  query,
  setQuery,
  filtered,
  selectedManager,
  setSelected,
}) => {
  return (
    <S.Card>
      <S.SearchBarWrap>
        <S.Input
          placeholder="담당자 명으로 검색해 보세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <S.SearchIcon width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 21l-4.35-4.35" stroke="#8b8f97" strokeWidth="2" strokeLinecap="round" />
          <circle cx="11" cy="11" r="7" stroke="#8b8f97" strokeWidth="2" />
        </S.SearchIcon>
      </S.SearchBarWrap>

      <S.Grid>
        {filtered.map((m) => (
          <ManagerCard
            key={m.id}
            data={m}
            selected={selectedManager?.id === m.id}
            onClick={() => setSelected(m.id)}
          />
        ))}
      </S.Grid>
    </S.Card>
  );
};
