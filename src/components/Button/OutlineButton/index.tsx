import * as S from "./index.styles";

interface OutlineButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  colorType: "white" | "black";
}

export const OutlineButton = ({ onClick, children, icon, colorType }: OutlineButtonProps) => {
  return (
    <S.ClearBtn onClick={onClick} colorType={colorType}>
      {icon}
      {children}
    </S.ClearBtn>
  );
};
