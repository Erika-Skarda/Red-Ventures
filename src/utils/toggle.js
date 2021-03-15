import React from 'react';
import { Div, ToggleContainer } from '../styles/toggleStyled';

export const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (

    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="50" height="50" alt="Sun icon" title="Sun icon"/>
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="50" height="50" alt="Moon icon" title="Moon icon"/>
    </ToggleContainer>
 
  );
};


