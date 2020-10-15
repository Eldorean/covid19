import { Country } from '@covid19/core'
import React from 'react'
import { CountryServiceProvider } from './services/CountriesServiceAdapter'

export interface CountryReportPageProps {
  countryName: string;
  country: Country
}

const CountryReportPageStatic: React.FC<CountryReportPageProps> = ({ countryName, country }) => {
  return <div>{countryName}: {country?.Report?.Deaths}</div>
}

const CountryReportPage = CountryServiceProvider(CountryReportPageStatic)

export { CountryReportPage }
