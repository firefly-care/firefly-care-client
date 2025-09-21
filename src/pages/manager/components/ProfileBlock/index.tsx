import React from "react";
import * as S from "./index.styles";

export const ProfileBlock: React.FC = () => {
  return (
    <S.Card>
      <S.SectionTitle>담당자 기본 정보</S.SectionTitle>
      <S.ContentGrid>
        <S.Avatar size={120} />
        <S.InfoGrid>
          <S.LabelCol>
            <S.LabelItem>이름</S.LabelItem>
            <S.LabelItem>연락처</S.LabelItem>
            <S.LabelItem>생년월일</S.LabelItem>
            <S.LabelItem>소속</S.LabelItem>
            <S.LabelItem>이메일</S.LabelItem>
            <S.LabelItem>주소</S.LabelItem>
          </S.LabelCol>

          <S.ValueCol>
            <S.ValueItem>이정선(여)</S.ValueItem>
            <S.ValueItem>010-3889-3501</S.ValueItem>
            <S.ValueItem>2003.11.12</S.ValueItem>
            <S.ValueItem>중로노인종합복지관</S.ValueItem>
            <S.ValueItem>dlwdjtjs0111@gmail.com</S.ValueItem>
            <S.ValueItem>인천광역시 부평구 장제로 150</S.ValueItem>
          </S.ValueCol>
        </S.InfoGrid>
      </S.ContentGrid>
    </S.Card>
  );
};
