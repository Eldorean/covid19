import React from 'react'
import styled from 'styled-components'
import { CenterHor } from "components/AbsoluteWindow/AbsoluteWindow";

const Window = styled.div`
  ${CenterHor}
  border: 2px solid #d6d4d4;
  border-radius: 3px;
  padding: 0px;
  width: 100%;
  max-width: 320px;
  margin: 15px auto;
`

const Dropdown: React.FC = ({ children }) => {
  return <Window>{children}</Window>
}

export { Dropdown }
