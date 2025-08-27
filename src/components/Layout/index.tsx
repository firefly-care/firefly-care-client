import { matchPath, Outlet, useLocation } from "react-router-dom";
import * as S from "./index.styles";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout() {
  const location = useLocation();

  const noHeaderPaths = ["/login"];

  const isHeaderVisible = !noHeaderPaths.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );

  return (
    <S.AppContainer>
      <S.AppWrapper>
        {isHeaderVisible && <Sidebar />}
        <S.AppMain noHeader={!isHeaderVisible}>
          {isHeaderVisible && <Header />}
          <Outlet />
        </S.AppMain>
      </S.AppWrapper>
    </S.AppContainer>
  );
}
