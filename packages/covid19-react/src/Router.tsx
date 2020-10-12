
import { CountryReportPage } from 'pages/CountryReportPage/CountryReportPage'
import { HomePage } from 'pages/HomePage/HomePage'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

type RouterParameters<T> = { [K in keyof T]?: string | undefined };

interface PageRouterConnectorProps<T> {
  page: React.FC<T>
}

const PageRouterParamsConnector = <T extends RouterParameters<T>>({ page: Page }: PageRouterConnectorProps<T>) => {
  const Params: T = useParams()

  return <Page {...Params} />
}

const Routing: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/country/:country" children={<PageRouterParamsConnector page={CountryReportPage} />} />
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
)

export { Routing }
