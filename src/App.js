import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import Navigation from "./Components/Navigation";
import theme from "./Theme";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Store } from "./Store";
function App() {
  return (
    <div className="App">
      <Store>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/product">
                <Product />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </ThemeProvider>
      </Store>
    </div>
  );
}

export default App;
