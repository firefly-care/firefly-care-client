import { useState } from 'react';
import * as S from './index.styles';

interface ActivityLogProps {
  isEditing?: boolean;
}

export const ActivityLog = ({ isEditing }: ActivityLogProps) => {
  const [log, setLog] = useState("");
  return (
    <>
      <S.ResultTitleRow>활동 내용</S.ResultTitleRow>
      <S.TextArea
        placeholder="활동 내용을 입력하세요"
        rows={8}
        disabled={!isEditing}
        value={log}
        onChange={(e) => setLog(e.target.value)}
      />
    </>
  );
};
