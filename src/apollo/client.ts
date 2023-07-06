import {
  ApolloClient,
  InMemoryCache,
  from,
  ApolloLink,
  HttpLink,
  ApolloCache,
  Observable,
  NormalizedCacheObject,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

// /** Middleware before request is made */
export const request = async (operation: any) => {
  const token = import.meta.env.VITE_ACCESS_TOKEN;

  // In case token is present bind it with all graphql request
  if (token) {
    operation.setContext({
      headers: {
        Authorization: token,
      },
    });
  }
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any = null;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    }),
);

const client: ApolloClient<object> = new ApolloClient({
  link: from([
    onError(({ graphQLErrors, networkError, operation, response }) => {
      if (graphQLErrors) {
        console.log("[GRAPHQL ERROR]", graphQLErrors);
      }
      if (networkError) {
        console.log("[NETWORK ERROR]");
      }
    }),
    requestLink,
    new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_URL,
    }),
  ]),
  cache: new InMemoryCache() as ApolloCache<NormalizedCacheObject>,
  connectToDevTools: true,
});

export default client;
