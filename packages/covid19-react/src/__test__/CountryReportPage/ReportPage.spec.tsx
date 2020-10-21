import React from 'react'
import { configure, mount, ReactWrapper, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { CountryReportPage } from 'pages/CountryReportPage/CountryReportPage'
import { MockNederland } from '__test__/_mocks/MockCountries'
import { MemoryRouter } from 'react-router-dom'
import { Statistic } from 'pages/CountryReportPage/components/Statistics'
import { CountryHeader } from 'pages/CountryReportPage/components'
configure({ adapter: new Adapter() })

describe('Country report page', () => {
  const title = MockNederland.Name;
  let ReportPage: ReactWrapper

  before(function () {
    ReportPage = mount(
      <MemoryRouter>
        <CountryReportPage countryName={title} country={MockNederland} />
      </MemoryRouter>
    )
  });

  it('shows the right country title', async () => {
    const Title = ReportPage.find(`[children="${title}"]`);
    expect(Title.closest('h2')).to.exist;
  })

  it('shows the statistics', async () => {
    const ReportStat = ReportPage.find("Statistic")
    expect(ReportStat.length).to.equal(3)
    // const mockReport = MockNederland.Report!

    // ReportStat.forEach((stat, i) => {
    //   const header = stat.find("Header").text()
    //   const count: number = parseInt(stat.find("ReportCount").text())
    //   const mockstat = Object.entries(mockReport).find(report => report[0] === header)
    //   expect(header).to.equal(mockstat ? mockstat[0] : '')
    //   expect(count).to.equal(mockstat ? mockstat[1] : '')
    //   console.log(header)
  })

  it('shows the home navigation button', async () => {
    const Navigator = ReportPage.find("Navigator")
    expect(Navigator.exists()).to.be.true

    const HomeLink = Navigator.find(`[children="Home"]`).first();
    expect(HomeLink.exists()).to.be.true
    expect(HomeLink.prop('to')).to.equal('/')
  })

  describe('CountryHeader Component', () => {
    const name = "label"
    const pop = "20"
    const Stat = shallow(<CountryHeader name={name} population={pop} />)
    it('renders the label', () => {
      expect(Stat.text()).contains(name)
    })
    it('renders the population', () => {
      expect(Stat.text()).contains(pop)
    })
  })

  describe('Statistic Component', () => {
    const label = "label"
    const count = "20"
    const Stat = shallow(<Statistic label={label} count={count} />)
    it('renders the label', () => {
      expect(Stat.text()).contains(label)
    })
    it('renders the population', () => {
      expect(Stat.text()).contains(count)
    })
  })
})
