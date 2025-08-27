import { YellowButton } from "@components/Button/YellowButton";
import { RedButton } from "@components/Button/RedButton";
import * as S from "./index.styles";
import {
  InfoTable,
  Checklist,
  ActivityLog,
} from "@components/care";
import { Topbar } from "@/components/Topbar";
import { TAB_TO_TITLE } from "../care-post/constants";
import { buildInfoTableData } from "../care-post/utils";
import { useCarePostState } from "../care-post/hooks";
import { useState } from "react";
import { OutlineButton } from "@/components/Button/OutlineButton";
import Print from "@assets/icons/common/print.svg?react"
import { SearchFilter } from "./components/SearchFilter";
import { Pagination } from "@/components/Pagination";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/Modal";

export const CareView = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();
  const [page, setPage] = useState(1);
  const totalPages = 5;
  const state = useCarePostState();

  const infoTableData = buildInfoTableData({
    tab: state.tab,
    targetValue: (
      <>
        박주형 {isEditing && <S.SmallBtn onClick={openModal}>선택</S.SmallBtn>}
      </>
    ),
    tabToTitle: TAB_TO_TITLE,
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <S.Container>
      <Topbar title="돌봄 정보" />
      <S.ContentContainer>
        <S.ButtonWrapper>
          <OutlineButton colorType="black">
            <Print />인쇄
          </OutlineButton>
        </S.ButtonWrapper>
        <S.Card>
          <InfoTable
            infoTableData={infoTableData}
            tab={state.tab}
            isEditing={isEditing}
          />
          <Checklist
            tab={state.tab}
            resultType={state.resultType}
            setResultType={state.setResultType}
            present={state.present}
            setPresent={state.setPresent}
            absent={state.absent}
            setAbsent={state.setAbsent}
            call={state.call}
            setCall={state.call}
            isEditing={isEditing}
          />
          <ActivityLog isEditing={isEditing} />
        </S.Card>
        <S.ButtonWrapper style={{ marginTop: 16 }}>
          <YellowButton onClick={handleEdit}>
            {isEditing ? "저장" : "수정"}
          </YellowButton>
          <RedButton>삭제</RedButton>
        </S.ButtonWrapper>
      </S.ContentContainer>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="대상자 목록">
        <SearchFilter />
        <S.TableWrapper>
          <S.Table>
            <thead>
              <tr>
                <S.TH>번호</S.TH>
                <S.TH>이름</S.TH>
                <S.TH>성별</S.TH>
                <S.TH>전화번호</S.TH>
                <S.TH>주소</S.TH>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <S.TD>{index + 1}</S.TD>
                  <S.TD>이정선</S.TD>
                  <S.TD>여</S.TD>
                  <S.TD>010-0000-0000</S.TD>
                  <S.TD>제주특별자치도 제주시 운송길 10</S.TD>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableWrapper>
        <S.PaginationWrapper>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </S.PaginationWrapper>
      </Modal>
    </S.Container>
  );
};
