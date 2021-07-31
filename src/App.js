import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, Typography } from "@material-ui/core";

import theme from "./Theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h1">hello world</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
