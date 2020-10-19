import { Country } from '../../entities/Country'

interface CountryDataProvider {
  GetAllCountries: () => Promise<Country[]>
  GetCountry: (name: string) => Promise<Country>
}

export { CountryDataProvider }
