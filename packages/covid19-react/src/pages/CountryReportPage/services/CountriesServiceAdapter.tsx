import { CoreServiceInstance } from 'services/core/CoreService'
import React, { useEffect, useState } from 'react'
import { Country } from '@covid19/core'

declare type CountryProp = {country: Country};
declare type RestProp = {countryName: string} ;
declare type WithoutCountry<T> = Pick<T, Exclude<keyof T, keyof CountryProp>>

const CountryServiceProvider =
  <T extends RestProp>(Component: React.FC<T>): React.FC<WithoutCountry<T>> =>
    (props) => {
      const [country, setCountry] = useState<Country>()

      useEffect(() => {
        console.log(props)
        const Core = new CoreServiceInstance().GetInstance()
        Core.CountryProvider.GetCountry(props.countryName).then((country) => {
          setCountry(country)
        })
      }, [])

      const ServiceComponent = Component as React.FC<WithoutCountry<T>>

      return <ServiceComponent {...props} country={country} />
    }

export { CountryServiceProvider }
