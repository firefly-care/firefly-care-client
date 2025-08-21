import { SearchForm } from "@/components/SearchForm";
import type { CareType } from "@/types/care";
import type { CareResultType } from "@/types/care";
import { CARE_TYPES, CARE_TYPE_LABELS } from "@/constants/care";
import {
  CARE_RESULT_TYPES,
  CARE_RESULT_TYPE_LABELS,
} from "../../constants/result";
import { useState } from "react";

export const CareSearchFilter = () => {
  const [service, setService] = useState<CareType | "전체">("전체");
  const [careResult, setCareResult] = useState<CareResultType | "전체">("전체");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchTarget, setSearchTarget] = useState<
    "전체" | "대상자" | "담당자"
  >("전체");

  const handleSearch = () => {};

  const handleReset = () => {};

  return (
    <SearchForm>
      <SearchForm.FilterSection label="서비스 구분">
        <SearchForm.SelectFilter<CareType | "전체">
          currentSelected={service}
          options={CARE_TYPES}
          onChange={setService}
          getLabel={(v) => (v === "전체" ? "전체" : CARE_TYPE_LABELS[v])}
        />
      </SearchForm.FilterSection>
      <SearchForm.FilterSection label="돌봄 결과">
        <SearchForm.SelectFilter<CareResultType | "전체">
          currentSelected={careResult}
          options={CARE_RESULT_TYPES}
          onChange={setCareResult}
          getLabel={(v) => (v === "전체" ? "전체" : CARE_RESULT_TYPE_LABELS[v])}
        />
      </SearchForm.FilterSection>
      <SearchForm.FilterSection label="돌봄 결과">
        <SearchForm.DateRangePicker
          startDate={start}
          endDate={end}
          onChange={(s, e) => {
            setStart(s);
            setEnd(e);
          }}
        />
      </SearchForm.FilterSection>
      <SearchForm.FilterSection label="검색">
        <SearchForm.SelectFilter<"대상자" | "담당자" | "전체">
          currentSelected={searchTarget}
          options={["대상자", "담당자"]}
          onChange={setSearchTarget}
        />
        <SearchForm.SearchInput
          value={searchValue}
          onChange={setSearchValue}
          onEnter={() => {}}
        />
        <SearchForm.ButtonSet
          handleReset={handleReset}
          handleSearch={handleSearch}
        />
      </SearchForm.FilterSection>
    </SearchForm>
  );
};
