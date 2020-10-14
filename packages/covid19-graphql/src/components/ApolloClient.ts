import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { ApiConfig } from '../..'

const client = ({ url }: ApiConfig) => new ApolloClient({
  uri: url,
  cache: new InMemoryCache()
})

export { client }
