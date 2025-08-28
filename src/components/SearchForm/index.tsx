import * as S from "./index.styles";
import { useState, useRef, useEffect } from "react";
import SearchIcon from "@assets/icons/common/search.svg?react";
import SearchWhiteIcon from "@assets/icons/common/search-white.svg?react";
import { OutlineButton } from "@components/Button/OutlineButton";

type FilterSectionProps = {
  label: string;
  children: React.ReactNode;
};

type SelectFilterProps<T extends string> = {
  currentSelected: T;
  options: readonly T[];
  onChange: (value: T) => void;
  getLabel?: (value: T) => React.ReactNode;
};

type InputProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  onEnter?: () => void;
};

const SearchForm = ({ children }: { children: React.ReactNode }) => {
  return <S.Container>{children}</S.Container>;
};

const FilterSection = ({ label, children }: FilterSectionProps) => {
  return (
    <S.FilterSectionContainer>
      <S.Label>{label}</S.Label>
      {children}
    </S.FilterSectionContainer>
  );
};

const SelectFilter = <T extends string>({
  currentSelected,
  options,
  onChange,
  getLabel,
}: SelectFilterProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const displayOptions = ["전체", ...options];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <S.SelectFilterContainer ref={dropdownRef}>
      <S.SelectBox onClick={() => setIsOpen((prev) => !prev)}>
        <span>{getLabel ? getLabel(currentSelected) : currentSelected}</span>
        <span className="arrow">▾</span>
      </S.SelectBox>
      {isOpen && (
        <S.OptionList>
          {displayOptions.map((opt) => (
            <S.OptionItem
              key={opt}
              selected={opt === currentSelected}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {getLabel ? getLabel(opt) : opt}
            </S.OptionItem>
          ))}
        </S.OptionList>
      )}
    </S.SelectFilterContainer>
  );
};

const DateRangePicker = ({
  startDate,
  endDate,
  onChange,
}: {
  startDate: string;
  endDate: string;
  onChange: (start: string, end: string) => void;
}) => {
  return (
    <S.DateRangePickerContainer>
      <S.DateInput
        value={startDate}
        onChange={(e) => onChange(e.target.value, endDate)}
      />
      <span>~</span>
      <S.DateInput
        value={endDate}
        onChange={(e) => onChange(startDate, e.target.value)}
      />
    </S.DateRangePickerContainer>
  );
};

const ButtonSet = ({
  handleReset,
  handleSearch,
}: {
  handleReset: () => void;
  handleSearch: () => void;
}) => {
  return (
    <S.ButtonContainer>
      <OutlineButton colorType="white" onClick={handleReset}>초기화</OutlineButton>
      <OutlineButton colorType="black" onClick={handleSearch}>
        <SearchWhiteIcon width={18} height={18} />
        검색
      </OutlineButton>
    </S.ButtonContainer>
  );
};

const SearchInput = ({
  value,
  onChange,
  placeholder = "검색어를 입력하세요",
  onEnter,
}: InputProps) => {
  return (
    <S.InputWrap>
      <S.Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onEnter?.();
        }}
      />
      <S.SearchIconContainer>
        <SearchIcon width={16} height={16} />
      </S.SearchIconContainer>
    </S.InputWrap>
  );
};

SearchForm.FilterSection = FilterSection;
SearchForm.SelectFilter = SelectFilter;
SearchForm.DateRangePicker = DateRangePicker;
SearchForm.SearchInput = SearchInput;
SearchForm.ButtonSet = ButtonSet;

export { SearchForm };
