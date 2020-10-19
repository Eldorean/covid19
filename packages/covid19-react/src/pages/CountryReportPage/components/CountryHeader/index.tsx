import React from "react";
import styled from "styled-components";

interface CountryHeaderProps {
  name: string
  population?: string
}
const CountryHeader: React.FC<CountryHeaderProps> = ({ name, population = '' }) => {
  const populationString = population ? `population: ${population}` : '\u00A0';
  return (
    <CountryName>
      <span>{name}</span>
      <CountryPopulation>{populationString}</CountryPopulation>
    </CountryName>
  )
}

const CountryName = styled.h2`
  text-align: center;
`

const CountryPopulation = styled.div`
  text-align: center;
  font-size: .5em;
  font-style: italic;
  font-weight: normal;
`


export { CountryHeader }
