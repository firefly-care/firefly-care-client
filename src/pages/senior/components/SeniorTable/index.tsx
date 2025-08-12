import { useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import Sort from "@assets/icons/common/sort.svg?react";
import BulbOn from "@assets/icons/common/bulb_on.svg?react";
import BulbOff from "@assets/icons/common/bulb_off.svg?react";
import { ExcelDownloadButton } from "@components/ExcelDownloadButton";

interface SeniorData {
  no: number;
  name: string;
  birth: string;
  contact: string;
  eupmyeondong: string;
  address: string;
  manager: string;
  managerContact: string;
  led: boolean[];
  lastActive: string;
  anomaly: string;
}

interface SeniorTableProps {
  tableData: SeniorData[];
}

export const SeniorTable = ({ tableData }: SeniorTableProps) => {
  const navigate = useNavigate();

  const handleRowClick = (seniorId: number) => {
    navigate(`/senior/${seniorId}`);
  };

  const excelDownload = () => {};

  return (
    <>
      <S.TableInfoRow>
        <S.TableCount>전체 {tableData.length}건</S.TableCount>
        <S.TableRight>
          <ExcelDownloadButton text="엑셀 다운로드" onClick={excelDownload} />
          <S.Latest>
            최신순 <Sort />
          </S.Latest>
        </S.TableRight>
      </S.TableInfoRow>
      <S.StyledTable>
        <thead>
          <tr>
            <S.TH>번호</S.TH>
            <S.TH>이름</S.TH>
            <S.TH>생년월일</S.TH>
            <S.TH>연락처</S.TH>
            <S.TH>읍면동</S.TH>
            <S.TH>주소</S.TH>
            <S.TH>담당자</S.TH>
            <S.TH>담당자 연락처</S.TH>
            <S.TH colSpan={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>LED On/Off</span>
                <div style={{ display: "flex", gap: 18, marginTop: 2 }}>
                  <span style={{ minWidth: 32, textAlign: "center" }}>
                    안방
                  </span>
                  <span style={{ minWidth: 32, textAlign: "center" }}>
                    거실
                  </span>
                  <span style={{ minWidth: 32, textAlign: "center" }}>
                    주방
                  </span>
                  <span style={{ minWidth: 32, textAlign: "center" }}>
                    화장실
                  </span>
                </div>
              </div>
            </S.TH>
            <S.TH>마지막 활동 시간</S.TH>
            <S.TH>이상 징후</S.TH>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <S.TR key={row.no} onClick={() => handleRowClick(row.no)}>
              <S.TD>{row.no}</S.TD>
              <S.TD>{row.name}</S.TD>
              <S.TD>{row.birth}</S.TD>
              <S.TD>{row.contact}</S.TD>
              <S.TD>{row.eupmyeondong}</S.TD>
              <S.TD>{row.address}</S.TD>
              <S.TD>{row.manager}</S.TD>
              <S.TD>{row.managerContact}</S.TD>
              {row.led.map((on, i) => (
                <S.TD
                  key={i}
                  style={{ textAlign: "center", padding: "7px 4px" }}
                >
                  {on ? (
                    <BulbOn width={25} height={25} />
                  ) : (
                    <BulbOff width={18} height={18} style={{ opacity: 0.3 }} />
                  )}
                </S.TD>
              ))}
              <S.TD>{row.lastActive}</S.TD>
              <S.TD>{row.anomaly}</S.TD>
            </S.TR>
          ))}
        </tbody>
      </S.StyledTable>
    </>
  );
};
