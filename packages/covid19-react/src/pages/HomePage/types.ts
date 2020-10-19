import { Country } from '@covid19/core'

export declare type CountryName = Pick<Country, 'Name'>
export declare type CountryPopulation = Pick<Country, 'Population'>
export declare type Countries = Array<CountryName & CountryPopulation>
