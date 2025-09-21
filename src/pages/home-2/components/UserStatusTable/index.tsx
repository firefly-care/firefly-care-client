import * as S from "./index.styles";
import { personStatusData } from "../../datas";
import type { PersonStatusType } from "../../types";
import { GRADE_TYPE_LABELS } from "../../constants";
import { BoxContainer } from "../BoxContainer";

export const UserStatusTable = () => {
  return (
    <BoxContainer title="담당자 현황">
      <S.TableSection>
        <S.TableWrapper>
          <S.Table>
            <S.Thead>
              <tr>
                <th>담당자</th>
                <th>대상자 수</th>
                <th>돌봄 건수</th>
                <th>최근 돌봄</th>
              </tr>
            </S.Thead>
            <S.Tbody>
              {personStatusData.map((user: PersonStatusType) => (
                <tr key={user.id}>
                  <td>{user.manager}</td>
                  <td>{GRADE_TYPE_LABELS[user.level]}</td>
                  <td>{GRADE_TYPE_LABELS[user.level]}</td>
                  <td>{user.lastActive}</td>
                </tr>
              ))}
            </S.Tbody>
          </S.Table>
        </S.TableWrapper>
      </S.TableSection>
    </BoxContainer>
  );
};
