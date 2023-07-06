import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import AppRouter from "./routes";

function MyApp() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default MyApp;
