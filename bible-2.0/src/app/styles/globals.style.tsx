'use client';
import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './fontFamily.style';
import { background } from './background.style';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fontFamily.montserrat};
    background-color: ${background.bege};
  }
`;

