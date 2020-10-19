import { css } from 'styled-components'

export const Center = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const CenterHor = css`
  ${Center}
  top: auto;
  transform: translate(-50%, 0%);
`

export const CenterVer = css`
  ${Center}
  left: auto;
  transform: translate(0%, -50%);
`

export const CenterTopWindow = css`
  ${Center} 
  top: 35%;
`

export const Top = css`
  position: absolute;
  top: 0;
`;

export const Bottom = css`
  position: absolute;
  bottom: 0;
`;