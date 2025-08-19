import * as S from "./index.styles";
import type { PageType } from "../../types";
import { useState, useRef, useEffect } from "react";
import {
  getPageTypeLabel,
  getPageTypeIcon,
} from "../../utils/getPageTypeUtils";

const pageTypes: PageType[] = ["calendar", "list"];

interface PageTypeSelectBoxProps {
  selected: PageType;
  onChange: (value: PageType) => void;
}

export function PageTypeSelectBox({
  selected,
  onChange,
}: PageTypeSelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        {getPageTypeIcon(selected)}
        <span>{getPageTypeLabel(selected)}</span>
        <span className="arrow">▾</span>
      </S.SelectBox>
      {isOpen && (
        <S.OptionList>
          {pageTypes.map((type) => (
            <S.OptionItem
              key={type}
              selected={type === selected}
              onClick={() => {
                onChange(type);
                setIsOpen(false);
              }}
            >
              {getPageTypeLabel(type)}
            </S.OptionItem>
          ))}
        </S.OptionList>
      )}
    </S.Container>
  );
}
