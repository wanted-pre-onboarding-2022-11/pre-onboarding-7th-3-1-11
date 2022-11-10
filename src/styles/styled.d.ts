import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      gray: string;
      blue: string;
      skyblue: string;
      white: string;
    };
  }
}
