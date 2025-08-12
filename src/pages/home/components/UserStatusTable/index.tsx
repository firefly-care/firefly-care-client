import * as S from "./index.styles";
import { personStatusData } from "../../datas";
import type { PersonStatusType } from "../../types";

export const UserStatusTable = () => {
  return (
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
              <td>{user.level}</td>
              <td>{user.lastActive}</td>
              <td>{user.abnormalSign}</td>
            </tr>
          ))}
        </S.Tbody>
      </S.Table>
    </S.TableWrapper>
  );
};
