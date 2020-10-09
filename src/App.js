import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Footer from './components/Footer/Footer';
import Nav from "./components/Nav/Nav";
import CasePage from "./pages/CasePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import { ReactComponent as Logo } from './components/Logo/Logo';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Logo /> */}

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
          <div style={{ position: 'fixed', bottom: '0' }}>
            <Footer />
          </div>
      </div>
    </Router>
  )
}

export default App;