import React from 'react'
import LoadingItem from "react-spinners/DotLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;

`;

const Loader: React.FC = () => (
  <LoadingItem
    css={override}
    size="1em"
    color={"#123abc"}
    loading={true}
  />
)

export { Loader }