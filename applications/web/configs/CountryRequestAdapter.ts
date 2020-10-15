import { ApolloQueryResult } from '@apollo/client/core'
import { Country } from '@covid19/core'
import { Queries, client, Covid19ApiConfig, Types } from '@covid19/graphql'

class CountryRequestAdapter {
  private countryName: string
  constructor (name: string) {
    this.countryName = name
  }

  public Get = () => this.CreatePromise()

  private resolve: (country: Country) => void
  private reject: (reason: any) => void
  private CreatePromise = () => new Promise<Country>((resolve, reject) => {
    this.resolve = resolve
    this.reject = reject
    this.QueryGateway()
  })

  private query = (name: string) => ({ query: Queries.COUNTRY, variables: { name } })
  private QueryGateway = () =>
    client(Covid19ApiConfig)
      .query(this.query(this.countryName))
      .then(this.ProcesResult)
      .catch(this.Error)

  private ProcesResult = (response: ApolloQueryResult<Types.CountryQuery>) =>
    this.resolve(this.MapResultToCountry(response.data))

  private MapResultToCountry = (data: Types.CountryQuery) => {
    const countryName = data.country.country
    const result = data.country.result
    const country = new Country(countryName, result.population)
    country.setReport({
      Tested: result.tests,
      Cases: result.cases,
      Deaths: result.deaths
    })
    return country
  }

  private Error = (e: Error) => { this.reject(e) }
}

export { CountryRequestAdapter }
