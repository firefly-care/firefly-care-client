import React from "react";
import { ProfileBlock } from "../ProfileBlock";
import { UserStatusTable } from "../UserStatusTable";
import { userStatusItems } from "../../datas/mock";
import * as S from "./index.styles";

export const RightPaneComponent: React.FC = () => {
  return (
    <S.Container>
      <ProfileBlock />
      <UserStatusTable items={userStatusItems}/>
    </S.Container>
  );
};
