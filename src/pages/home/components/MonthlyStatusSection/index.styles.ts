import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  align-items: flex-start;
`;

export const VerticalLine = styled.div`
  height: 57px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const NumberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Button2}
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Head1}
  label {
    ${({ theme }) => theme.fonts.Body1}
  }
`;

export const CareTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
`;
