import * as S from "./index.styles";

interface RedButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const RedButton = ({ onClick, children }: RedButtonProps) => {
  return <S.RegisterButton onClick={onClick}>{children}</S.RegisterButton>;
};
