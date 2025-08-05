import styled from "styled-components";

interface AppMainProps {
  noHeader?: boolean;
}

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100dvh;
  overflow: hidden;
`;

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  overflow-x: hidden;
  align-items: center;
  flex: 1;
  min-height: 0;
`;

export const AppMain = styled.main<AppMainProps>`
  flex: 1;
  min-height: 0;
  height: 100%;
  overflow-y: auto;
  padding-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
