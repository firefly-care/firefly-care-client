import "styled-components";
import type { fonts, primitive, gradients } from "@styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: typeof fonts;
    colors: typeof primitive & {
      semantic: {
        normal: string;
        info: string;
        warning: string;
        danger: string;
      };
    };
    gradients: typeof gradients;
  }
}
