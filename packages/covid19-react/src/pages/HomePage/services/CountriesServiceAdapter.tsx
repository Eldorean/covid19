import { CoreServiceInstance } from 'services/core/CoreService'
import React, { useEffect, useState } from 'react'
import { Country } from '@covid19/core'

declare type CountriesProp = {countries: Country[]};
declare type RestProp = Record<string, unknown>;
declare type WithoutCountry<T> = Pick<T, Exclude<keyof T, keyof CountriesProp>>

const CountriesServiceProvider =
  <T extends RestProp>(Component: React.FC<T>): React.FC<WithoutCountry<T>> =>
    (props) => {
      const [countries, setCountries] = useState<Country[]>([])

      useEffect(() => {
        const Core = new CoreServiceInstance().GetInstance()
        Core.CountryProvider.GetAllCountries().then((countries) => {
          setCountries(countries)
        })
      }, [])

      const ServiceComponent = Component as React.FC<WithoutCountry<T>>

      return <ServiceComponent {...props} countries={countries} />
    }

export { CountriesServiceProvider }
