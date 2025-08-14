import * as S from './index.styles';

export const ActivityLog = () => {
  return (
    <>
      <S.ResultTitleRow>활동 내용</S.ResultTitleRow>
      <S.TextArea placeholder="활동 내용을 입력하세요" rows={8} />
    </>
  );
};
