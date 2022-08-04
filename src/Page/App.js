import React from "react";
import Header from "../components/Molecules/Header";
import MainComponent from "../components/Molecules/MainComponent";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <MainComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
