import React from 'react'
import ReactDOM from 'react-dom'
import { CoreServiceInstance } from './services/core/CoreService'
import * as Core from '@covid19/core'
import { App } from './App'
import * as serviceWorker from './serviceWorker';

interface Covid19ReactProps {
  CountryGateway: Core.CountryDataProvider
  HomePageProps: Core.HomePageProps
}

export const Start = (props: Covid19ReactProps) => {
  new CoreServiceInstance().SET_INSTANCE_ON_ROOT({
    CountryProvider: props.CountryGateway,
    HomePageProps: props.HomePageProps
  })

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

  serviceWorker.register();
}
