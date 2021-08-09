// Pages and components to be rendered to the website
import LandingPage from "./pages/landingPage";
import CreateEvent from "./pages/createEvent";
import YourEvents from "./components/yourEvents";
import Settings from "./components/settings";
import Logout from "./components/logout";
import Header from "./components/header";
import Navbar from "./components/navbar";

// Styling
import "./App.css";

// React functions
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

// Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
}

export default App;
