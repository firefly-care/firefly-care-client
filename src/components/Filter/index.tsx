import { useEffect, useRef, useState } from "react";
import * as S from "./index.styles";

interface FilterProps<T extends string> {
  selected: T;
  options: readonly T[];
  onChange: (value: T) => void;
  getLabel?: (value: T) => React.ReactNode;
}

export function Filter<T extends string>({
  selected,
  options,
  onChange,
  getLabel,
}: FilterProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const displayOptions = [...options];

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
    <S.Container ref={dropdownRef}>
      <S.SelectBox onClick={() => setIsOpen((prev) => !prev)}>
        <span>{getLabel ? getLabel(selected) : selected}</span>
        <span className="arrow">▾</span>
      </S.SelectBox>
      {isOpen && (
        <S.OptionList>
          {displayOptions.map((opt) => (
            <S.OptionItem
              key={opt}
              selected={opt === selected}
              onClick={() => {
                onChange(opt as T);
                setIsOpen(false);
              }}
            >
              {getLabel ? getLabel(opt) : opt}
            </S.OptionItem>
          ))}
        </S.OptionList>
      )}
    </S.Container>
  );
}
