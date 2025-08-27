import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
`;

export const RowContainer = styled.div`
  display: grid;
  gap: 12px;
  width: 100%;
  min-height: 0;
  grid-template-columns: 1fr;
`;

export const DongInfoList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  max-height: 720px;
  overflow: auto;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const DongInfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.orange[50]};
  padding: 8px 12px;
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
`;

export const DongTitle = styled.span`
  white-space: nowrap;
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.black};
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange[100]};
`;

export const DongPopulation = styled.span`
  ${({ theme }) => theme.fonts.Body1B};
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 4px;
  color: ${({ theme }) => theme.colors.orange[900]};
  label {
    ${({ theme }) => theme.fonts.Body2};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const HouseholeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 16px;
  width: 100%;
`;

export const Househole = styled.div`
  background: ${({ theme }) => theme.gradients.orange};
  border: 2px solid ${({ theme }) => theme.colors.orange[500]};
  border-radius: 10px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 100%;
`;

export const HouseholeTitle = styled.span`
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

export const HouseholeNumber = styled.span`
  ${({ theme }) => theme.fonts.Head1}
  color: ${({ theme }) => theme.colors.orange[700]};
  label {
    white-space: nowrap;
    ${({ theme }) => theme.fonts.Button1};
    color: ${({ theme }) => theme.colors.black};
  }
`;
