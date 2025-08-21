export const tableData = Array.from({ length: 9 }).map((_, idx) => ({
  no: idx + 1,
  name: "이정선",
  birth: "2003.11.12",
  contact: "010-1234-5678",
  eupmyeondong: "부평동",
  address: "인천광역시 부평구 장제로 150",
  manager: "박주형",
  managerContact: "010-0000-0000",
  led: [true, false, false, false],
  lastActive: "12시간 전",
  anomaly: "장시간 미활동",
}));
