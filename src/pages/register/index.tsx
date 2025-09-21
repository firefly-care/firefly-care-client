import { useState } from "react";
import { YellowButton } from "@components/Button/YellowButton";
import * as S from "./index.styles";
import { InfoTable, ActivityLog } from "./components/ManagerTable";
import { SeniorTable } from "./components/SeniorTable";
import { Topbar } from "@/components/Topbar";

type RegisterTab = "manager" | "senior";

export const Register = () => {
  const [activeTab, setActiveTab] = useState<RegisterTab>("manager");

  return (
    <S.Container>
      <Topbar title="등록" />
      <S.ContentContainer>
        <S.Tabs>
          <S.Tab
            active={activeTab === "manager"}
            onClick={() => setActiveTab("manager")}
          >
            담당자
          </S.Tab>
          <S.Tab
            active={activeTab === "senior"}
            onClick={() => setActiveTab("senior")}
          >
            대상자
          </S.Tab>
        </S.Tabs>
        <S.Card>
          {activeTab === "manager" ? (
              <InfoTable isEditing />
          ) : (
              <SeniorTable isEditing />
          )}
          <ActivityLog isEditing />
        </S.Card>
        <S.ButtonWrapper>
          <YellowButton>등록</YellowButton>
        </S.ButtonWrapper>
      </S.ContentContainer>
    </S.Container>
  );
};
