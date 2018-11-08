import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'


// The first thing you have to do when using Apollo is configure your ApolloClient instance. It needs to know the endpoint of your GraphQL API so it can deal with the network connections.
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})


// This middleware will be invoked every time ApolloClient sends a request to the server. Apollo Links allow to create middlewares that let you modify requests before they are sent to the server.
// First, we get the authentication token from local storage if it exists, after that we return the headers to the context so httpLink can read them
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)


registerServiceWorker()


