import type { DefaultTheme } from "styled-components";
import type { GradeType } from "@/types/grade";
import type { CareType } from "@/types/care";

export function getSemanticColor(
  theme: DefaultTheme,
  grade: GradeType | CareType
) {
  switch (grade) {
    case "정상":
      return theme.colors.semantic.normal;
    case "관심":
      return theme.colors.semantic.info;
    case "주의":
      return theme.colors.semantic.warning;
    case "위험":
      return theme.colors.semantic.danger;
    default:
      return theme.colors.semantic.normal;
  }
}
