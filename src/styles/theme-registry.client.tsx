'use client'

import { ThemeProvider, Global } from '@emotion/react';
import { theme } from './theme';
import { globalStyles } from './global-styles';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
