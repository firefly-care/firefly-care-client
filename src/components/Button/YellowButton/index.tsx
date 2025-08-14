import * as S from "./index.styles";

interface YellowButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const YellowButton = ({ onClick, children }: YellowButtonProps) => {
  return <S.RegisterButton onClick={onClick}>{children}</S.RegisterButton>;
};
