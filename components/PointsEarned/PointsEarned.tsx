import React from "react";
import styled from "@emotion/styled";
import { PointsEarnedProps } from "./types";

const PointsEarnedWrapper = styled.div`
  label: PointsEarnedWrapper;
`;

const Text = styled.span`
  label: Text;
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.brand.primary};
`;

export const PointsEarned: React.FC<PointsEarnedProps> = ({}) => {
  return (
    <PointsEarnedWrapper>
      <Text> ⌬ 1200 POINTS EARNED</Text>
    </PointsEarnedWrapper>
  );
};
