import React, { useState } from 'react'
import { HomePageTitle } from './components/HomePageTitle'
import { CountryListPresenter } from './components/CountryList/CountryList'
import { HomePageInput } from './components/HomePageInput'
import { CountriesServiceProvider } from './services/CountriesServiceAdapter'
import { DropDownWindow } from './components/DropDownWindow'
import { Country } from '@covid19/core'
import { useFuse } from './hooks/useFuse'

interface HomePageProps extends Record<string, unknown>{
  title: string
  countries: Country[]
}

const CountryList = new CountryListPresenter().RenderList

const HomePageStatic: React.FC<HomePageProps> = ({ title, countries }) => {
  const [searchPattern, setSearchPattern] = useState('')
  const { countries: filteredCountries, hasResults } = useFuse(countries, searchPattern)

  const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchPattern(e.target.value)

  return (
    <>
      <HomePageTitle>{title}</HomePageTitle>
      <HomePageInput onChange={onInputchange} placeholder="search country" />
      {hasResults && <DropDownWindow><CountryList countries={filteredCountries} /></DropDownWindow>}
    </>
  )
}

const HomePage = CountriesServiceProvider(HomePageStatic)

export { HomePage }
