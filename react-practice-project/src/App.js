import { useState } from "react"
import { ColorModeContext, useMode } from "./theme";
import {CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/home";
import Sidebar from "./scenes/global/Sidebar"

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

  return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                  <Sidebar isSidebar={isSidebar} />
                  <Routes>
                      <Route path="/" element={<Home />} />
                  </Routes>
              </div>
          </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
