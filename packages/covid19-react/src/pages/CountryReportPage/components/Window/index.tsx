import { CenterTopWindow } from "components/AbsoluteWindow/AbsoluteWindow";
import { Responsive } from "components/ResponsiveStyling";
import styled from "styled-components";

const TabletStyle = Responsive.CreateStyle.WhenDevice.BiggerThan("TABLET")`
  ${CenterTopWindow}
  text-align: center;
`

const Window = styled.div`
  width: 100%;
  padding: 0px 20px;

  ${TabletStyle}
`

export { Window }
