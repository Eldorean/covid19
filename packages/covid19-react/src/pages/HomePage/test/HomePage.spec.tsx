import React from 'react'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('CountryList', () => {
  describe('CountryLabel', () => {
    it('shows the right styling', () => {
      const wrapper = shallow(<div />)
      expect(wrapper).to.matchSnapshot()
    })
  })
})
