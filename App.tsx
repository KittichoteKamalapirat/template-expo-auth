import { ApolloProvider } from "@apollo/client";

import React from "react";
import AppWithoutApollo from "./AppWithoutApollo";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { apolloClient } from "./lib/apollo";

export default function App() {
  return (
    <ErrorBoundary>
      <ApolloProvider client={apolloClient}>
        <AppWithoutApollo />
      </ApolloProvider>
    </ErrorBoundary>
  );
}
