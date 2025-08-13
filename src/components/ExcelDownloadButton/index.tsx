import * as S from "./index.styles";
import ExcelIcon from "@assets/icons/common/excel.svg?react";

interface ExcelDownloadButtonProps {
  text: string;
  onClick: () => void;
}
export const ExcelDownloadButton = ({
  text,
  onClick,
}: ExcelDownloadButtonProps) => {
  return (
    <S.ButtonContainer onClick={onClick}>
      <ExcelIcon width={12} height={12} />
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonContainer>
  );
};
