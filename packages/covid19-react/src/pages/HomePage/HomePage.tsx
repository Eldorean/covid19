import React, { useState } from 'react'
import { Country } from '@covid19/core'
import { useFuse } from './hooks/useFuse'
import { CountryListBuilder, Title, Input, Dropdown, Window } from './components'

interface HomePageProps extends Record<string, unknown> {
  title: string
  countries: Country[]
}

const CountryList = new CountryListBuilder().RenderList
CountryList.displayName = 'CountryList';

const HomePage: React.FC<HomePageProps> = ({ title, countries }) => {
  const [searchPattern, setSearchPattern] = useState('')
  const { countries: filteredCountries, hasResults } = useFuse(countries, searchPattern)

  const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchPattern(e.target.value)

  return (
    <Window>
      <Title>{title}</Title>
      <Input onChange={onInputchange} placeholder="search country" />
      {hasResults && <Dropdown><CountryList countries={filteredCountries} /></Dropdown>}
    </Window>
  )
}


export { HomePage }
