import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import { Listings, Listing, Home, Host, NotFound, User } from "./sections";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host" element={<Host />} />
        <Route path="/listing/:id" element={<Listing />} />
        {/* ? means location params is optional */}
        <Route path="/listings/:location?" element={<Listings title="Tiny House Listing" />} />
        <Route path="/user/:id" element={<User />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  )
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
