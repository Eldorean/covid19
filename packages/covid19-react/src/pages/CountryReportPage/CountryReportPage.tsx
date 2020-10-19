import { Country, CovidReport } from '@covid19/core'
import React from 'react'
import { CountryServiceProvider } from './services/CountriesServiceAdapter'
import { CountryHeader, Window, Navigator } from './components'
import { Statistic } from './components/Statistics'
import { formatNumber } from 'mixin/numberFormatter/numberFormatter'
import { AtBottom } from './components/Navigator/components/Positions'

export interface CountryReportPageProps {
  countryName: string;
  country?: Country
}

const CountryReportPageStatic: React.FC<CountryReportPageProps> = ({ countryName, country }) => {
  const report = formatReport(country?.Report)

  return (
    <>
      <Window>
        <CountryHeader name={countryName} population={formatPopulation(country?.Population)} />
        <div>
          <Statistic label="Tested" count={report.Tested} />
          <Statistic label="Cases" count={report.Cases} />
          <Statistic label="Death" count={report.Deaths} />
        </div>
      </Window>

      <AtBottom>
        <Navigator to="/" >Home</Navigator>
      </AtBottom>
    </>
  )
}

const formatPopulation = (population?: number) => {
  if (!population) return '';
  return formatNumber(population).toString()
}

const formatReport = (report?: CovidReport) => {
  if (!report) return buildReport({})
  return buildReport({
    Cases: formatNumber(report.Cases),
    Tested: formatNumber(report.Tested),
    Deaths: formatNumber(report.Deaths)
  })
}

const buildReport = ({ Cases = '', Tested = '', Deaths = '' }) => ({
  Cases, Tested, Deaths
})

const CountryReportPage = CountryServiceProvider(CountryReportPageStatic)

export { CountryReportPage }
