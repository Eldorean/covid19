import { Country } from '@covid19/core'
import Fuse from 'fuse.js'

const TRUNCATE_COUNTRY_COUNT = 10

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.1,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ['Name']
}

const useFuse = (countryList: Country[], searchPattern: string) => {
  const countries = (
    new Fuse(countryList, options)
      .search(searchPattern)
      .map(result => result.item)
      .slice(0, TRUNCATE_COUNTRY_COUNT)
  )
  const hasResults = !!countries.length

  return { countries, hasResults }
}

export { useFuse }
