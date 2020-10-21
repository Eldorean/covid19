import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { Dropdown } from 'pages/HomePage/components'


configure({ adapter: new Adapter() })

describe('Homepage dropdown', () => {
  it('renders it\'s children', () => {
    const children = <div>children</div>
    const Homepage = mount(<Dropdown>{children}</Dropdown>)

    expect(Homepage.contains(children)).to.be.true
  })
})