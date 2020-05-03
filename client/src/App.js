import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/about";
import PortfolioPage from './pages/portfolio';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
        </Switch>
    </Router>
  );
}

export default App;
