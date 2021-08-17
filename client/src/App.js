// Pages and components to be rendered to the website
import LandingPage from "./pages/landingPage";
import Dashboard from "./pages/dashboard";

// Styling
import "./App.css";

// React functions
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Dashboard />
          </Route>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
