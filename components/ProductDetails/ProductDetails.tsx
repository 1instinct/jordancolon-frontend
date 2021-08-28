import React from "react";
import styled from "@emotion/styled";
import { ProductDetailsProps } from "./types";

const ProductDetailsWrapper = styled.div`
  label: ProductDetailsWrapper;
`;

export const ProductDetails: React.FC<ProductDetailsProps> = ({}) => {
  return <ProductDetailsWrapper></ProductDetailsWrapper>;
};
