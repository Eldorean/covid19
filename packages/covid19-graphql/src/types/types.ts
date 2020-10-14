export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  /** Get global stats: cases, deaths, recovered, time last updated, and active cases */
  globalTotal: Result;
  /** Get the same data from the 'countries' query, but filter down to a specific country */
  country: Country;
  /** Returns a JSON array with an element for each country that has stats available. This includes iso codes, lat/long, a link to the country flag, cases, new cases, deaths, new deaths, recovered, active cases, critical cases, and cases/deaths per one million people */
  countries: Array<Country>;
  /** Get cases, new cases, deaths, new deaths, and active cases for a state */
  state: State;
  /** Get stats on United States of America States with COVID-19, including cases, new cases, deaths, new deaths, and active cases */
  states: Array<State>;
};

export type QueryGlobalTotalArgs = {
  filterBy?: Maybe<CountryResultParametersFilterInput>;
};

export type QueryCountryArgs = {
  filterBy?: Maybe<CountryResultParametersFilterInput>;
  name: Scalars['String'];
};

export type QueryCountriesArgs = {
  filterBy?: Maybe<CountryResultParametersFilterInput>;
  sortBy?: Maybe<CountryResultParametersSortInput>;
};

export type QueryStateArgs = {
  filterBy?: Maybe<StateResultParametersFilterInput>;
  name: Scalars['String'];
};

export type QueryStatesArgs = {
  filterBy?: Maybe<StateResultParametersFilterInput>;
  sortBy?: Maybe<StateResultParametersSortInput>;
};

/** Result object */
export type Result = {
  __typename?: 'Result';
  /** Last updated date */
  updated?: Maybe<Scalars['DateTime']>;
  /** Total number of confirmed cases */
  cases: Scalars['Int'];
  /** Total number of confirmed cases reported today */
  todayCases: Scalars['Int'];
  /** Total number of reported deaths */
  deaths: Scalars['Int'];
  /** Total number of reported deaths today */
  todayDeaths: Scalars['Int'];
  /** Total number of reported recovery */
  recovered?: Maybe<Scalars['Int']>;
  /** Total number of recovered cases reported today */
  todayRecovered: Scalars['Int'];
  /** Total number of active cases */
  active: Scalars['Int'];
  /** Total number of critical cases */
  critical?: Maybe<Scalars['Int']>;
  /** Cases per one million */
  casesPerOneMillion?: Maybe<Scalars['Float']>;
  /** Deaths per one million */
  deathsPerOneMillion?: Maybe<Scalars['Float']>;
  /** Total number of tests conducted */
  tests?: Maybe<Scalars['Int']>;
  /** Tests per one million */
  testsPerOneMillion?: Maybe<Scalars['Float']>;
  /** Total number of affected population */
  population?: Maybe<Scalars['Float']>;
  /** Active cases per one million */
  activePerOneMillion?: Maybe<Scalars['Float']>;
  /** Recovered cases per one million */
  recoveredPerOneMillion?: Maybe<Scalars['Float']>;
  /** Critical cases per one million */
  criticalPerOneMillion?: Maybe<Scalars['Float']>;
  /** Total number of affected countries */
  affectedCountries?: Maybe<Scalars['Int']>;
};

/** Filter parameters */
export enum CountryResultParametersFilterInput {
  Yesterday = 'yesterday',
  TwoDaysAgo = 'twoDaysAgo'
}

/** Country object */
export type Country = {
  __typename?: 'Country';
  /** Name of the country */
  country: Scalars['String'];
  /** Contains the information of the country  */
  countryInfo: CountryInfo;
  /** Contains the results of the country */
  result: Result;
  /** Continent of the specific country */
  continent: Scalars['String'];
};

/** Contains the information of the country */
export type CountryInfo = {
  __typename?: 'CountryInfo';
  /** Unique ID of the country from the dataset */
  _id?: Maybe<Scalars['ID']>;
  /** Latitude of the country */
  lat: Scalars['Float'];
  /** Longitude of the country */
  long: Scalars['Float'];
  /** Image link to the country flag */
  flag: Scalars['String'];
  /** Country slug by its ISO3 like 'USA' */
  iso3?: Maybe<Scalars['String']>;
  /** Country slug by its ISO2 like 'US' */
  iso2?: Maybe<Scalars['String']>;
};

/** Sorting parameters */
export enum CountryResultParametersSortInput {
  Cases = 'cases',
  TodayCases = 'todayCases',
  Deaths = 'deaths',
  TodayDeaths = 'todayDeaths',
  Recovered = 'recovered',
  Active = 'active',
  Critical = 'critical',
  CasesPerOneMillion = 'casesPerOneMillion',
  DeathsPerOneMillion = 'deathsPerOneMillion'
}

/** State object */
export type State = {
  __typename?: 'State';
  /** Name of the state */
  state: Scalars['String'];
  /** Contains the result of the state */
  result: Result;
};

/** Filter parameters */
export enum StateResultParametersFilterInput {
  Yesterday = 'yesterday'
}

/** Sorting parameters */
export enum StateResultParametersSortInput {
  Cases = 'cases',
  TodayCases = 'todayCases',
  Deaths = 'deaths',
  TodayDeaths = 'todayDeaths',
  Active = 'active'
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;

export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Country, 'country'>
  )> }
);
