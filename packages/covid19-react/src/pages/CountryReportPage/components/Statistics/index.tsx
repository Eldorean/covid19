import React from "react";
import { Wrapper, Count, Header } from "./styles";
import { ContentWrapper } from "./styles/ContenWrapper";
import { Loader } from 'components/Loader/Loader';

interface StatisticProps {
  label: string
  count: string
}

const Statistic: React.FC<StatisticProps> = ({ label, count }) => {
  const CountElement = count ? <Count>{count}</Count> : <Loader />

  return (
    <Wrapper>
      <ContentWrapper>
        <Header>{label}</Header>
        {CountElement}
      </ContentWrapper>
    </Wrapper>
  )
}

export { Statistic }