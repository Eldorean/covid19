import React from 'react'
import { configure, mount, ReactWrapper, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'

import { HomePage } from 'pages/HomePage/HomePage'
import { useFuse } from 'pages/HomePage/hooks/useFuse'
import { countries } from '__test__/_mocks/MockCountries'
configure({ adapter: new Adapter() })

describe('Homepage', () => {
  describe('title', () => {
    it('shows the right text', async () => {
      const title = 'HomePageTitle';

      const Homepage = shallow(<HomePage title={title} countries={[]} />)
      const Title = Homepage.find(`[children="${title}"]`);

      expect(Title.text()).equal(title);
    })
  })

  describe('input and dropdown', () => {
    let Homepage: ReactWrapper
    let Input: ReactWrapper

    before(function () {
      Homepage = mount(
        <MemoryRouter>
          <HomePage title={''} countries={countries} />
        </MemoryRouter>
      )
      Input = Homepage.find(`input`)
    });

    it('shows the dropdown when there is input', async () => {
      const Dropdown = () => Homepage.find('Dropdown')
      expect(Dropdown().exists()).to.be.false

      Input.simulate('change', { target: { value: 'Frankrijk' } })
      expect(Dropdown().exists()).to.be.true
    })

    it('sets the state through the input', async () => {
      Input.simulate('change', { target: { value: 'land' } })

      const Dropdown = Homepage.find('Dropdown')
      expect(Dropdown.exists(`[children="${countries[0].Name}"]`)).to.be.true
      expect(Dropdown.exists(`[children="${countries[1].Name}"]`)).to.be.false
      expect(Dropdown.exists(`[children="${countries[2].Name}"]`)).to.be.true
      expect(Dropdown.exists(`[children="${countries[3].Name}"]`)).to.be.false
    })

    after(function () {
      Homepage.unmount()
    });
  })

  describe('useFuse hook', () => {
    it('returns nothing with empty querystring', () => {
      const { countries: filteredCountries } = useFuse(countries, '')
      expect(filteredCountries.length).to.equal(0)
    })
    it('returns the right countries', () => {
      const { countries: filteredCountries } = useFuse(countries, 'land')
      expect(filteredCountries.length).to.equal(2)
    })
    it('truncates more than 10 items', () => {
      const SameCountry = new Array(12).fill(countries.find(({ Name }) => Name === 'Nederland'))
      const { countries: filteredCountries } = useFuse(SameCountry, 'land')
      expect(filteredCountries.length).to.equal(10)
    })
    it('return the right value for hasResults', () => {
      const { hasResults: ResultsIsFalse } = useFuse(countries, '')
      expect(ResultsIsFalse).to.be.false
      const { hasResults: ResultsIsTrue } = useFuse(countries, 'land')
      expect(ResultsIsTrue).to.be.true
    })
  })
})
