import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigator = styled(Link)`
  display: block;
  background: #DDD;
  text-align: center;
  padding:10px;
  text-decoration: none;
  color: inherit;
`
Navigator.displayName = 'Navigator'

export { Navigator };