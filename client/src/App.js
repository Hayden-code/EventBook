import LandingPage from "./pages/landingPage";
import CreateEvent from "./pages/createEvent";
import YourEvents from "./components/yourEvents";
import Settings from "./components/settings";
import Logout from "./components/logout";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <Header />
          <Navbar />
          <div className="dashboard">
            <Switch>
              <Route path="/dashboard/create-event">
                <CreateEvent />
              </Route>
              <Route path="/dashboard/your-events">
                <YourEvents />
              </Route>
              <Route path="/dashboard/settings">
                <Settings />
              </Route>
              <Route path="/dashboard/logout">
                <Logout />
              </Route>
            </Switch>
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
