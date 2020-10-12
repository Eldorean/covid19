import React from 'react'
import { HomePageInput } from './HomePageInput'
import { HomePageTitle } from './HomePageTitle'
import { HomePageProps } from '@covid19/core'

// const HomePageController: React.FC = () => { }

const HomePage: React.FC = () => {
  const homePageProps = new HomePageProps()

  return (
    <>
      <HomePageTitle>{homePageProps.Title}</HomePageTitle>
      <HomePageInput placeholder="search country" />
    </>
  )
}

export { HomePage }
