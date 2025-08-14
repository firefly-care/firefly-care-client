import * as S from "./index.styles";
import ArrowIcon from "@assets/icons/common/arrow-gray.svg?react";

interface TopbarProps {
  title: string;
  onClick?: () => void;
}

export const Topbar = ({ title, onClick }: TopbarProps) => {
  return (
    <S.Container>
      {onClick && (
        <S.GotoBack onClick={onClick}>
          <ArrowIcon width={8} height={14} />
          목록으로
        </S.GotoBack>
      )}

      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
