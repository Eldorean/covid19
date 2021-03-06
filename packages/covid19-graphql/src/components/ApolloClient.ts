import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { ApiConfig } from '../configuration/ApiConfig'

const client = ({ url }: ApiConfig) => new ApolloClient({
  uri: url,
  cache: new InMemoryCache()
})

export { client }
