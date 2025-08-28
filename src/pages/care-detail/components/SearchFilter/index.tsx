import { SearchForm } from "@/components/SearchForm";
import { useState } from "react";

export const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState<"이름" | "전체">("전체");

  const handleSearch = () => {};

  const handleReset = () => {};

  return (
    <SearchForm>
      <SearchForm.FilterSection label="카테고리">
        <SearchForm.SelectFilter<"이름" | "전체">
          currentSelected={searchCategory}
          options={["이름", "전체"]}
          onChange={setSearchCategory}
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
