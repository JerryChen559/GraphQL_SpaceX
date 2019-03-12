import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import Launches from "./Components/Launches";
import Launch from "./Components/Launch";
import "./App.css";
import logoSpaceX from "./logoSpaceX.jpg";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <img
              src={logoSpaceX}
              alt="SpaceX"
              style={{ width: 300, display: "block", margin: "auto" }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
