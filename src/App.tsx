import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { UserContextProvider } from "./contexts/UserContext";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
