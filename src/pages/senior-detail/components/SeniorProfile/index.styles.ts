import styled from "styled-components";

export const ProfileWrapper = styled.div`
  background: ${({ theme }) => theme.colors.orange[50]};
  border-radius: 28px;
  padding: 24px 24px 24px 24px;
  min-width: 540px;
`;

export const ProfileTitle = styled.div`
  ${({ theme }) => theme.fonts.Head3};
  margin-bottom: 18px;
`;

export const ProfileCard = styled.div`
  background: #fff;
  border-radius: 15px;
  display: flex;
  padding: 20px;
  gap: 25px;
  align-items: flex-start;
`;

export const GaugeSection = styled.div`
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GaugeLabelBig = styled.div`
  ${({ theme }) => theme.fonts.Head3};
  align-self: flex-start;
  margin-bottom: 12px;
`;

export const GaugeSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 260px;
  height: 170px;
  /* margin-bottom: 10px; */
  padding-left: 20px;
  /* background-color: pink; */
`;

export const GaugeScore = styled.div`
  position: absolute;
  left: 0;
  top: 38px;
  width: 220px;
  text-align: center;
`;

export const GaugeScoreLabel = styled.div`
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const GaugeScoreValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
`;

export const GaugeDanger = styled.div`
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Danger = styled.span`
  background: ${({ theme }) => theme.colors.red[400]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 2px 14px;
  font-size: 1rem;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 1.5px;
  height: 260px;
  background: #e2e3e6;
  border-radius: 2px;
`;

export const InfoSection = styled.div`
  min-width: 380px;
`;

export const InfoTitle = styled.div`
  ${({ theme }) => theme.fonts.Head3};
  margin-bottom: 25px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  height: 24px;
`;

export const InfoLabel = styled.span`
  color: #888;
  ${({ theme }) => theme.fonts.Body1};
`;

export const InfoValue = styled.span<{ strong?: boolean }>`
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.fonts.Body1B};
`;