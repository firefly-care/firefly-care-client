import type { DefaultTheme } from "styled-components";
import type { GradeType } from "@/types/grade";

export function getSemanticColor(theme: DefaultTheme, grade: GradeType) {
  switch (grade) {
    case "normal":
      return theme.colors.semantic.normal;
    case "info":
      return theme.colors.semantic.info;
    case "warning":
      return theme.colors.semantic.warning;
    case "danger":
      return theme.colors.semantic.danger;
    default:
      return theme.colors.semantic.normal;
  }
}
