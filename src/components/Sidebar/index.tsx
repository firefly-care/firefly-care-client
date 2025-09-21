import * as S from "./index.styles";
import MenuIcon from "@assets/icons/common/burger.svg?react";
import HomeIcon from "@assets/icons/common/home.svg?react";
import SystemIcon from "@assets/icons/common/setting.svg?react";
// import ManagerIcon from "@assets/icons/common/manager.svg?react";
import ManagerIcon from "@assets/icons/common/manager.svg?react";
import TargetIcon from "@assets/icons/common/person.svg?react";
import PlusIcon from "@assets/icons/common/plus.svg?react";
// import CareIcon from "@assets/icons/common/graph.svg?react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItemType {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
}

const MENU_ITEMS: MenuItemType[] = [
  { icon: HomeIcon, label: "홈", path: "/" },
  { icon: ManagerIcon, label: "담당자", path: "/manager"},
  { icon: TargetIcon, label: "대상자", path: "/senior" },
  // { icon: CareIcon, label: "돌봄 현황", path: "/care" },
  // { icon: ManagerIcon, label: "운영 관리", path: "/manager" },
  { icon: PlusIcon, label: "등록", path: "/register" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      <MenuIcon width={52} height={52} />
      <S.MenuContainer>
        {MENU_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isActive={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </S.MenuContainer>
      <S.PlusButton onClick={() => navigate("/care-post")}>
        <SystemIcon width={24} height={24} />
        <S.PlusLabel>시스템</S.PlusLabel>
      </S.PlusButton>
    </S.Container>
  );
}

interface MenuItemProps extends MenuItemType {
  isActive: boolean;
  onClick: () => void;
}

const MenuItem = ({ icon: Icon, label, isActive, onClick }: MenuItemProps) => {
  return (
    <S.MenuItemContainer isActive={isActive} onClick={onClick}>
      <Icon width={28} height={28} />
      <S.MenuLabel>{label}</S.MenuLabel>
    </S.MenuItemContainer>
  );
};