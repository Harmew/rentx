import "styled-components";
import theme from "./theme";

// Extend the DefaultTheme interface from the styled-components library with the theme object from the theme.ts file
declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
