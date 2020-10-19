import styled from 'styled-components'

export const CountryRow = styled.div`
  padding: 0;
  border-bottom: 1px solid #999999;
  display: grid;
  grid-template-columns: auto min-content;

  &:last-of-type{
    border-bottom: none;
  }
`
