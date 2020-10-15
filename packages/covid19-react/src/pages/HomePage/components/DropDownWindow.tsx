import React from 'react'
import styled from 'styled-components'

const Window = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  border: 2px solid #d6d4d4;
  border-radius: 3px;
  transform: translate(-50%, 0%) translate(0, 65px);
  padding: 0px;
  width: 100%;
  max-width: 320px;
`

const DropDownWindow: React.FC = ({ children }) => {
  return <Window>{children}</Window>
}

export { DropDownWindow }
