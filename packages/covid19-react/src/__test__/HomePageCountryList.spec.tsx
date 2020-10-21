import React from 'react'
import { configure, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'
import { CountryListBuilder } from 'pages/HomePage/components'
import { countries } from './mocks/MockCountries'


configure({ adapter: new Adapter() })

describe('Homepage country list', () => {
  let CountryList: ReturnType<typeof mount>

  before(function () {
    const Presenter = new CountryListBuilder()
    CountryList = mount(<MemoryRouter>{Presenter.RenderList({ countries })}</MemoryRouter>)
  });

  it('renders it\'s default elements', () => {

    expect(CountryList.exists("CountryRow")).to.be.true
    expect(CountryList.exists("CountryLabel")).to.be.true
    expect(CountryList.exists("CountryLink")).to.be.true
    expect(CountryList.exists("CountryNameLabel")).to.be.true
    expect(CountryList.exists("CountryPopulationLabel")).to.be.true
  })

  it('shows all countries from props', () => {
    expect(CountryList.find("CountryRow").length).to.equal(countries.length)
  })

  it('shows each countries names', () => {
    const NameLabels = CountryList.find("CountryNameLabel")
    NameLabels.forEach((l, i) => {
      expect(l.text()).to.equal(countries[i].Name)
    })
  })

  it('shows each countries population', () => {
    const NameLabels = CountryList.find("CountryPopulationLabel")
    NameLabels.forEach((l, i) => {
      expect(l.text()).to.equal(`(pop: ${countries[i].Population})`)
    })
  })

  it('sets the correct link for each country', () => {
    const NameLabels = CountryList.find("CountryLink")
    NameLabels.forEach((l, i) => {
      expect(l.prop('to')).to.equal(`/country/${countries[i].Name}`)
    })
  })

  after(function () {
    CountryList.unmount()
  });
})
