// utils/globalStyles.ts
import { css } from '@emotion/react';

export const globalStyles = css`
  /* Importa a fonte Poppins com pesos 400, 700 e 800 */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');

  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: #ffe5de; /* off-white suave */
    background-image: url('/background.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: local;
    overflow-x: hidden; /* evita rolagem horizontal */
    color: #3c1663; /* texto padrão usando roxo escuro */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    background: none;
    border: none;
  }
`;
