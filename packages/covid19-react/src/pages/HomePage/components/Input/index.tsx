import { Center } from 'components/AbsoluteWindow/AbsoluteWindow'
import { Input as InputStyle } from 'components/Input/Input'
import styled from 'styled-components'

export const Input = styled(InputStyle)`
  display: block;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
`
Input.displayName = "Input"
