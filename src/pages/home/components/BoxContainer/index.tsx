import * as S from "./index.styles";

interface BoxContainerProps {
  title: string;
  children: React.ReactNode;
}

export const BoxContainer = ({ title, children }: BoxContainerProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.Container>
  );
};
