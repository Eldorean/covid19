import { Bottom, Top } from "components/AbsoluteWindow/AbsoluteWindow"
import { Responsive } from "components/ResponsiveStyling"
import styled from "styled-components"

const MobileStyle = Responsive.CreateStyle.WhenDevice.BiggerThan("TABLET")`
  ${Top}
  width: 100%;
`

const TabletStyle = Responsive.CreateStyle.WhenDevice.Is("MOBILE")`
  ${Bottom}
  width: 100%;
`

const Position = styled.div`
  ${TabletStyle}
  ${MobileStyle}
`
export { Position }