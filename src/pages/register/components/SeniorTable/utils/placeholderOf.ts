export const placeholderOf = (label: string) => {
  switch (label) {
    case "이름": return "이름을 입력해 주세요.";
    case "생년월일":
    case "서비스 시작일": return "YYYY.MM.DD";
    case "보장유형": return "보장유형을 입력해 주세요.";
    case "돌봄 담당자": return "돌봄 담당자 선택";
    case "돌봄 담당자 전화번호": return "돌봄 담당자 전화번호";
    case "보호자 이름": return "보호자 이름을 입력해 주세요.";
    case "보호자 연락처": return "보호자 연락처를 입력해 주세요.";
    case "우편번호": return "우편번호를 입력해 주세요.";
    case "상세 주소": return "상세 주소를 입력해 주세요.";
    case "주 연락처": return "주 연락처를 입력해 주세요.";
    case "부 연락처": return "부 연락처를 입력해 주세요.";
    case "LED 번호": return "LED 번호를 입력해 주세요.";
    default: return String(label);
  }
};
