import { ApolloQueryResult } from '@apollo/client/core'
import { Country } from '@covid19/core'
import { Queries, client, Covid19ApiConfig, Types } from '@covid19/graphql'

class AllCountriesRequestAdapter {
  public Get = () => this.CreatePromise()

  private resolve: (country: Country[]) => void
  private reject: (reason: any) => void
  private CreatePromise = () => new Promise<Country[]>((resolve, reject) => {
    this.resolve = resolve
    this.reject = reject
    this.QueryGateway()
  })

  private query = () => ({ query: Queries.COUNTRIES_CONTENT })
  private QueryGateway = () =>
    client(Covid19ApiConfig)
      .query(this.query())
      .then(this.ProcesResult)
      .catch(this.Error)

  private ProcesResult = (response: ApolloQueryResult<Types.ListOfCountriesQuery>) =>
    this.resolve(this.MapResultToCountry(response.data))

  private MapResultToCountry = (data: Types.ListOfCountriesQuery) =>
    data.countries.map(({ country, result }) => this.CreateCountry(country, result.population))

  private CreateCountry = (name: string, population: number) => new Country(name, population)

  private Error = (e: Error) => { this.reject(e) }
}

export { AllCountriesRequestAdapter }
