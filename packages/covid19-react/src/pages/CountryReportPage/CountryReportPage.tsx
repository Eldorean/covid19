import React from 'react'
// import Country from '../../../../../core/src/entitties/Country'

export interface CountryReportPageProps {
  country: string;
}

const CountryReportPage: React.FC<CountryReportPageProps> = ({ country }) => {
  return <div>{country}</div>
}

export { CountryReportPage }
