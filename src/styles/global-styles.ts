/* utils/globalStyles.ts */
import { css } from '@emotion/react';

export const globalStyles = css`
  /* importa Poppins */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');

  /* reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    overflow-y: auto;
    scrollbar-gutter: stable;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: #3c1663;
    background-image: url('background.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: #3c1663;
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
