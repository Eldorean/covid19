import { Country } from "@covid19/core";
import { CoreInstance } from "services/core/CoreService";
import { countries } from "./MockCountries";

const CountriesPromise = new Promise<Country[]>((resolve) => resolve(countries))
const CountryPromise = (name: string) => new Promise<Country>((resolve) => resolve(countries.find(({ Name }) => Name === name)))

export const MockCoreServiceProvider: CoreInstance = {
  CountryProvider: {
    GetAllCountries: () => CountriesPromise,
    GetCountry: (name: string) => CountryPromise(name),
  },
  HomePageProps: { Title: "Welcome to the Covid-19 portal" }
}