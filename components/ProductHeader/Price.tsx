import React from "react";
import { PriceProps } from "./types";
import styled from "@emotion/styled";

const PriceWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  text-align: right;
  label: PriceWrapper;
`;

const Amount = styled.h1`
  label: Amount;
  color: #000;
  font-family: "Bebas Neue";
  font-size: 33.87px;
  line-height: 40.64px;
  margin: 0;
`;

const SaleUnit = styled.span`
  label: SaleUnit;
  font-family: "Roboto Condensed";
  font-size: 14px;
  color: #000;
`;

export const Price: React.FC<PriceProps> = () => {
  return (
    <PriceWrapper>
      <Amount> 88$ </Amount>
      <SaleUnit>per piece</SaleUnit>
    </PriceWrapper>
  );
};
