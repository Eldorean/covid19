import { Start } from '@covid19/react'
import { HomePageProps, CountryProvider } from '@covid19/core'
import { CountryRequestAdapter } from './CountryRequestAdapter'
import { AllCountriesRequestAdapter } from './AllCountriesRequestAdapter'

const CountryGateway = new CountryProvider({
  GetAllCountries: () => new AllCountriesRequestAdapter().Get(),
  GetCountry: (name: string) => new CountryRequestAdapter('Netherlands').Get()
})

const PresentationProps = {
  CountryGateway: CountryGateway,
  HomePageProps: new HomePageProps()
}

Start(PresentationProps)
