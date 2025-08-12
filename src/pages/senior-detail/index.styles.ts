import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  font-family: 'Pretendard', sans-serif;
`;

export const Content = styled.div`
  padding: 32px 40px;
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const SectionTitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 5px;
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
`;

export const GrayDivider = styled.div`
  width: 100%;
  height: 2px;
  background: #e2e3e6;
  border-radius: 1px;
  margin: 12px 0 24px 0;
`;

export const BottomSection = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
`;

export const TableTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 12px; */
  /* background-color: orange; */
  /* height: 30px; */
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  /* background-color: green; */
`;

export const EditBtn = styled.button`
  background: #fff;
  border: 1.5px solid;
  border-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 5px;
  padding: 1px 13px;
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #f4f7fa;
  }
`;

export const CancelBtn = styled.button`
  background: ${({ theme }) => theme.colors.red[500]};;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #d94444;
  }
`;