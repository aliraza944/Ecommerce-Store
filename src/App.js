import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, Typography } from "@material-ui/core";

import theme from "./Theme";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
