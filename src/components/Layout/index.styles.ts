import styled from "styled-components";

interface AppMainProps {
  noHeader?: boolean;
}

export const AppContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  overflow-x: hidden;
  align-items: stretch;
  flex: 1;
  min-height: 0;
  /* height: 100vh; */
`;

export const AppMain = styled.main<AppMainProps>`
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  flex: 1 1 auto;
`;

export const PageContainer = styled.div`
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;