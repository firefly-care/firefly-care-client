import { SearchForm } from "@/components/SearchForm";
import { useState } from "react";

export const SeniorSearchFilter = () => {
  const [isService, setIsService] = useState<"정상" | "서비스 취소" | "전체">(
    "전체"
  );
  const [searchValue, setSearchValue] = useState("");
  const [searchTarget, setSearchTarget] = useState<
    "전체" | "대상자" | "담당자"
  >("전체");

  const handleSearch = () => {};

  const handleReset = () => {};

  return (
    <SearchForm>
      <SearchForm.FilterSection label="서비스 구분">
        <SearchForm.SelectFilter<"정상" | "서비스 취소" | "전체">
          currentSelected={isService}
          options={["정상", "서비스 취소", "전체"]}
          onChange={setIsService}
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
