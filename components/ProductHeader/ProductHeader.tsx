import React from "react";
import { ProductHeaderProps } from "./types";
import styled from "@emotion/styled";
import { Price } from "./Price";

const ProductHeaderWrapper = styled.div`
  label: ProductHeaderWrapper;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Name = styled.h1`
  label: Name;
  color: #000;
  font-family: "BEBAS NEUE";
  font-weight: 400;
  font-size: 33.87px;
  line-height: 40.64px;
`;

export const ProductHeader: React.FC<ProductHeaderProps> = () => {
  return (
    <ProductHeaderWrapper>
      <Name> PATTERNED KNIT SWEATER </Name>
      <Price />
    </ProductHeaderWrapper>
  );
};
