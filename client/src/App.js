import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Launches from "./Components/Launches";
import "./App.css";
import logoSpaceX from "./logoSpaceX.jpg";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={logoSpaceX}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;