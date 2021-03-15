
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    align-items: center;
    overflow-x: hidden;
    /* background: ${({ theme }) => theme.body}; */
    //background-color: white;
    //color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  } 
  /* .root {
    max-width: 250;
    border: 4px solid ${({ theme }) => theme.bg};
  } */
  /* select {
    background-color: ${({ theme }) => theme.select};
    color: ${({ theme }) => theme.selectText};
  } */
`