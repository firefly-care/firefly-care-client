import { useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import { careListData } from "../../datas";
import { CareTypeTag } from "@/components/CareTypeTag";
import type { CareItemType } from "../../types";
import { CARE_RESULT_TYPE_LABELS } from "@/constants/care";

export const CareList = () => {
  return (
    <S.Container>
      <S.Title>돌봄 목록</S.Title>
      <S.CareItemList>
        {careListData.map((item) => (
          <CareItem key={item.id} item={item} />
        ))}
      </S.CareItemList>
    </S.Container>
  );
};

const CareItem = ({ item }: { item: CareItemType }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to", `/care-view/${item.id}`);
    navigate(`/care-view/${item.id}`);
  };

  return (
    <S.CareItemContainer onClick={handleClick} $status={item.status}>
      <S.ItemHeader>
        <S.NameNTag>
          <S.Name>{item.name}</S.Name>
          <CareTypeTag type={item.type} size="medium" />
        </S.NameNTag>
        <S.StatusBadge $status={item.status}>
          {CARE_RESULT_TYPE_LABELS[item.status]}
        </S.StatusBadge>
      </S.ItemHeader>

      <S.MetaRow>
        <S.MetaItem>
          <S.MetaKey>✓ 담당자</S.MetaKey>
          <S.MetaValue>{item.manager}</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem>
          <S.MetaKey>✓ 돌봄 일자</S.MetaKey>
          <S.MetaValue>{item.date}</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem $full>
          <S.MetaKey>✓ 돌봄 내용</S.MetaKey>
          <S.Preview>{item.preview}</S.Preview>
        </S.MetaItem>
      </S.MetaRow>
    </S.CareItemContainer>
  );
};
