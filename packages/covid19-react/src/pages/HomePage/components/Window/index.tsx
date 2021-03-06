import { CenterTopWindow } from "components/AbsoluteWindow/AbsoluteWindow";
import { Responsive } from "components/ResponsiveStyling";
import styled from "styled-components";

const DesktopStyle = Responsive.CreateStyle.WhenDevice.BiggerThan("DESKTOP")`
  ${CenterTopWindow}
`

const Window = styled.div`
  width: 100%;
  padding: 0px 20px;

  ${DesktopStyle}
`
Window.displayName = "Window"

export { Window }
