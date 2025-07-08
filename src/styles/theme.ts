// utils/theme.ts
import { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: '#3dc54f',        // verde vibrante
    primaryLight: '#50f166',        // verde vibrante
    primaryDark: '#278d46',    // verde escuro
    secondary: '#602e9e',      // roxo vivo
    secondaryDark: '#3c1663',  // roxo escuro
    accent: '#fc8cb5',         // rosa vibrante
    accentLight: '#f4b9b8',    // rosa suave
    mutedPurple: '#887bb0',    // lavanda
    background: '#ffe5de',     // off-white quente
    backgroundLight: '#ffe2e6',// off-white rosado
    white: '#ffffff',          // branco puro
    text: '#3c1663',           // texto padrão
    action: '#731ca7',         // cor da ação
    darkPurple: '#440a69',     // roxo escuro
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  fontWeights: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  radii: {
    small: '4px',
    default: '8px',
    large: '16px',
    round: '50%',
  },
  shadows: {
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    button: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};
