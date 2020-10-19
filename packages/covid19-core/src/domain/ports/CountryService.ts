import { Country } from '../../entities/Country'

interface CountryService {
  GetAllCountries: () => Promise<Country[]>
  GetCountry: (name: string) => Promise<Country>
}

export { CountryService }
