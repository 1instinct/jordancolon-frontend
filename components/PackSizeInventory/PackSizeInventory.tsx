import React from "react";
import styled from "@emotion/styled";
import { PackSizeInventoryProps } from "./types";
import QtyPerSize from "./QtyPerSize";

const PackSizeInventoryWrapper = styled.div`
  label: PackSizeInventoryWrapper;
  color: #000;
`;

const Row = styled.div`
  label: Row;
  display: flex;
`;

const Header = styled.h4`
  label: Header;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 26.42px;
  line-height: 33.03px;
  margin: 10px 0;
`;

export const PackSizeInventory: React.FC<PackSizeInventoryProps> = ({}) => {
  return (
    <PackSizeInventoryWrapper>
      <Header>Piece quantity per pack</Header>
      <Row>
        <QtyPerSize qty={2} size={"XS"} />
        <QtyPerSize qty={2} size={"SM"} />
        <QtyPerSize qty={4} size={"MD"} />
        <QtyPerSize qty={2} size={"LG"} />
        <QtyPerSize qty={2} size={"XL"} />
      </Row>
    </PackSizeInventoryWrapper>
  );
};
