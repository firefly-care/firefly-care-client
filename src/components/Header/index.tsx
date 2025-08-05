import * as S from "./index.styles";
import Logo from "@assets/icons/common/logo.svg?react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.LogoSection>
        <Logo width={30} height={30} onClick={handleLogoClick} />
        <S.Title>반딧불이 돌봄 서비스</S.Title>
      </S.LogoSection>
      <S.ContentSection>
        <S.Label>OO구 관리자</S.Label>
        <S.LogoutButton>로그아웃</S.LogoutButton>
      </S.ContentSection>
    </S.Container>
  );
};

export default Header;
