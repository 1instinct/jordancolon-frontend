import React from "react";
import styled from "@emotion/styled";
import { PackPriceCellProps } from "../types";

const PackPriceCellWrapper = styled.div`
  label: PackPriceCellWrapper;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Condensed";
  font-size: 20.11px;
`;

export const PackPriceCell: React.FC<PackPriceCellProps> = ({ packPrice }) => {
  return <PackPriceCellWrapper>{packPrice}$</PackPriceCellWrapper>;
};

export default PackPriceCell;
