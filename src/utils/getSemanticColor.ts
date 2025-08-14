import type { DefaultTheme } from "styled-components";
import type { StatusType } from "@/types/status";

export function getSemanticColor(theme: DefaultTheme, grade: StatusType) {
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
