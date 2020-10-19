
import { CountryReportPage } from 'pages/CountryReportPage/CountryReportPage'
import { HomePage } from 'pages/HomePage/HomePage'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import { CoreServiceInstance } from 'services/core/CoreService'

type RouterParameters<T> = { [K in keyof T]?: string | undefined };

interface PageRouterConnectorProps<T> {
  page: React.FC<T>
}

const PageRouterParamsConnector = <T extends RouterParameters<T>>({ page: Page }: PageRouterConnectorProps<T>) => {
  const Params: T = useParams()
  return <Page {...Params} />
}

const Routing: React.FC = () => {
  const Core = new CoreServiceInstance()
  Core.GetInstance()
  const HomepageTitle = Core.GetInstance().HomePageProps.Title

  return (
    <Router>
      <Switch>
        <Route path="/country/:countryName" children={<PageRouterParamsConnector page={CountryReportPage} />} />
        <Route path="/">
          <HomePage title={HomepageTitle} />
        </Route>
      </Switch>
    </Router>
  )
}

export { Routing }
