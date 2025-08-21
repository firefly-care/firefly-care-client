import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  box-sizing: border-box;
`;

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const ContentContainer = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  flex: 1;
  flex: 1 1 auto;
  min-height: 0;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  min-height: 0;
`;
