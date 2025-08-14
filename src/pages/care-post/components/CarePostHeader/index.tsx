import { WhiteButton } from '@components/Button/WhiteButton';
import TrashIcon from '@assets/icons/common/trash.svg?react';
import type { Tab } from '../../types';
import * as S from './index.styles';

interface CarePostHeaderProps {
  tab: Tab;
  setTab: (tab: Tab) => void;
  onReset: () => void;
}

export const CarePostHeader = ({ tab, setTab, onReset }: CarePostHeaderProps) => {
  return (
    <>
      <S.Title>돌봄 등록</S.Title>
      <S.TopBar>
        <S.Tabs>
          <S.Tab active={tab === 'visit'} onClick={() => setTab('visit')}>
            방문돌봄
          </S.Tab>
          <S.Tab active={tab === 'call'} onClick={() => setTab('call')}>
            전화돌봄
          </S.Tab>
          <S.Tab active={tab === 'emergency'} onClick={() => setTab('emergency')}>
            긴급출동
          </S.Tab>
        </S.Tabs>
        <WhiteButton icon={<TrashIcon />} onClick={onReset}>
          전체 지우기
        </WhiteButton>
      </S.TopBar>
    </>
  );
};
