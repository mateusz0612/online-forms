import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: Record<string, string>;
    fontWeights: Record<string, number>;
    queries: Record<"mobile" | "tablet" | "desktop", string>;
  }
}
