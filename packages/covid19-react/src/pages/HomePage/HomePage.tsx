import React from 'react'
import { CoreService } from 'services/core/CoreService'
import { HomePageInput } from './HomePageInput'
import { HomePageTitle } from './HomePageTitle'

// const HomePageController: React.FC = () => { }

const HomePage: React.FC = () => {
  const core = new CoreService().GetInstance()

  return (
    <>
      <HomePageTitle>{core.HomePageProps.Title}</HomePageTitle>
      <HomePageInput placeholder="search country" />
    </>
  )
}

export { HomePage }
