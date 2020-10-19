import { CountryDataProvider } from './ports/CountryDataProvider'
import { CountryService } from './ports/CountryService'

class CountryProvider implements CountryDataProvider {
  constructor (private Gateway: CountryService) {}
  GetAllCountries = () => this.Gateway.GetAllCountries()
  GetCountry = (countryname: string) => this.Gateway.GetCountry(countryname)
}

export { CountryProvider }
