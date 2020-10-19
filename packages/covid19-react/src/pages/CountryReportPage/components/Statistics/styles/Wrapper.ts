import { Responsive } from "components/ResponsiveStyling";
import styled from "styled-components";


const TabletStyle = Responsive.CreateStyle.WhenDevice.BiggerThan("TABLET")`
  display: inline-block;
  width: 100px;
`

export const Wrapper = styled.div`
  ${TabletStyle}
  height: 100px;
  margin: 10px;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;

  border: 1px solid #333;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 0 #b1aaaa;
`