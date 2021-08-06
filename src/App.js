import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import Navigation from "./Components/Navigation";
import theme from "./Theme";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
