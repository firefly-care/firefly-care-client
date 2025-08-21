import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding: 20px;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  flex: 0 0 auto;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const MonthlyStatus = styled.div`
  padding: 10px;
  gap: 20px;
  display: flex;
  width: 100%;
`;

export const HL = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const CareTypeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  align-items: flex-start;
`;

export const NumberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Button2}
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Head1}
  white-space: nowrap;
  label {
    ${({ theme }) => theme.fonts.Body1}
  }
`;
