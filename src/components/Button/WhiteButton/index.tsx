import * as S from "./index.styles";

interface WhiteButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const WhiteButton = ({ onClick, children, icon }: WhiteButtonProps) => {
  return (
    <S.ClearBtn onClick={onClick}>
      {icon}
      {children}
    </S.ClearBtn>
  );
};
