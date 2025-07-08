// src/types/emotion.d.ts
import '@emotion/react';
import { theme } from '@/utils/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      accent: string;
      accentLight: string;
      mutedPurple: string;
      background: string;
      backgroundLight: string;
      white: string;
      text: string;
      action: string;
      darkPurple: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    fontWeights: {
      regular: number;
      bold: number;
      extraBold: number;
    };
    space: number[];
    radii: {
      small: string;
      default: string;
      large: string;
      round: string;
    };
    shadows: {
      card: string;
      button: string;
    };
  }
}

type ThemeType = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
  export interface Theme extends ThemeType { }
}
