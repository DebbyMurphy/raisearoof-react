import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import CasePage from "./pages/CasePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
        <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/case/:id">
            <CasePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;