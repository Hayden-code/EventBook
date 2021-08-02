import LandingPage from "./pages/landingPage";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Router>
    </div>
  );
}

export default App;
