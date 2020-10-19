import { Country } from '@covid19/core'
import { formatNumber } from 'mixin/numberFormatter/numberFormatter';
import React from 'react'
import * as Styles from './styles'

declare type CountryListProps = {
  countries: Country[]
}

class CountryListPresenter {
  public CountryRow;
  public CountryLink;
  public CountryLabel;
  public CountryName;
  public CountryPopulation;

  constructor() {
    this.CountryRow = Styles.CountryRow
    this.CountryLink = Styles.CountryLink
    this.CountryLabel = Styles.CountryLabel
    this.CountryName = Styles.CountryNameLabel
    this.CountryPopulation = Styles.CountryPopulationLabel
  }

  public RenderList: React.FC<CountryListProps> = ({ countries }) => (
    <div>{countries.map(this.CountryElement)}</div>
  )

  private CountryElement: React.FC<Country> = ({ Name, Population }) => {
    const Presenter = this
    return (
      <Presenter.CountryRow key={Name}>
        <Presenter.CountryLabel>
          <Presenter.CountryName>{Name} </Presenter.CountryName>
          <Presenter.CountryPopulation>(pop: {this.formatPopulation(Population)})</Presenter.CountryPopulation>
        </Presenter.CountryLabel>
        <Presenter.CountryLink to={`/country/${Name}`}>&#x279C;</Presenter.CountryLink>
      </Presenter.CountryRow>
    )
  }

  private formatPopulation = (population?: number) => {
    if (!population) return '';
    return formatNumber(population).toString()
  }
}

export { CountryListPresenter }
