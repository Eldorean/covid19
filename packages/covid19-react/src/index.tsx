import React from 'react'
import ReactDOM from 'react-dom'
import { CoreService } from 'services/core/CoreService'
import { App } from './App'

export const Start = (core: any) => {
  new CoreService().SET_INSTANCE_ON_ROOT(core)

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}
