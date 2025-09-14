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
    <S.AppWrapper>
      {isHeaderVisible && (
        <S.AppContainer>
          <Sidebar />
        </S.AppContainer>
      )}
      <S.AppMain noHeader={!isHeaderVisible}>
                  {isHeaderVisible && <Header />}
          <S.PageContainer>
            <Outlet />
          </S.PageContainer>
      </S.AppMain>
    </S.AppWrapper>
  );
}
