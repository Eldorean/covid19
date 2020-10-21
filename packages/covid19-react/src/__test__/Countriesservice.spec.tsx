import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CoreServiceInstance } from 'services/core/CoreService'
import { Country } from '@covid19/core'
import { MockCoreServiceProvider } from './mocks/MockCoreServiceProvider'
import { countries as MockCountries } from './mocks/MockCountries'
import { CountriesServiceProvider } from 'pages/HomePage/services/CountriesServiceAdapter'

configure({ adapter: new Adapter() })

interface MockComponentProps extends Record<string, unknown> { countries: Country[], testProp: string }
const MockComponentFactory = (fn: (props: MockComponentProps) => void): React.FC<MockComponentProps> => (props) => {
  fn(props);
  return <div></div>;
}

describe('Countries Service', () => {
  const testString = "Testing"
  let CoreService: CoreServiceInstance

  before(function BuildCoreInstance() {
    CoreService = new CoreServiceInstance()
    CoreService.SET_INSTANCE_ON_ROOT(MockCoreServiceProvider)
  });

  it("returns the countries", (done) => {
    const MockComponent = MockComponentFactory(({ countries }) => {
      console.log(countries)
      if (countries === MockCountries) done();
    })
    const Component = CountriesServiceProvider(MockComponent)
    mount(<Component />)
  })

  it("proxies the properties", (done) => {
    const MockComponent = MockComponentFactory(({ countries, testProp }) => {
      if (countries.length && testProp === testString) done();
    })
    const Component = CountriesServiceProvider(MockComponent)
    mount(<Component testProp={testString} />)
  })

})
