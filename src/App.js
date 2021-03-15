import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/globals';
import { Provider } from "react-redux";
import Router from "../src/containers/router/routes";
import { store, history } from './store';
import { CssBaseline } from "@material-ui/core";
import { useDarkMode } from "./utils/mode";
import { Toggle } from "./utils/toggle";

function App() {
 
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} />  */}
        <GlobalStyles />
        <CssBaseline />        
        <Router history={history} />    
      </ThemeProvider>
      
    </Provider>
  );
}

export default App;



