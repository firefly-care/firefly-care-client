import * as S from "./index.styles";
import { personStatusData } from "../../datas";
import type { PersonStatusType } from "../../types";
import { SIGN_TYPE_LABELS, GRADE_TYPE_LABELS } from "../../constants";

export const UserStatusTable = () => {
  return (
    <S.TableSection>
      <S.TableWrapper>
        <S.Table>
          <S.Thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>담당자</th>
              <th>등급</th>
              <th>마지막 활동</th>
              <th>이상 징후</th>
            </tr>
          </S.Thead>
          <S.Tbody>
            {personStatusData.map((user: PersonStatusType) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.manager}</td>
                <td>{GRADE_TYPE_LABELS[user.level]}</td>
                <td>{user.lastActive}</td>
                <td>
                  {user.abnormalSign
                    ? SIGN_TYPE_LABELS[user.abnormalSign]
                    : null}
                </td>
              </tr>
            ))}
          </S.Tbody>
        </S.Table>
      </S.TableWrapper>
    </S.TableSection>
  );
};
