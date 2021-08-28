import React from 'react';
import styled from '@emotion/styled';
import { AddToCartProps } from './types';

const AddToCartWrapper = styled.div`
  label: AddToCartWrapper;
  background-color: ${(props) => props.theme.colors.brand.primary};
  display: inline-flex;
  width: 553px;
  height: 86.33px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "BEBAS NEUE";
  font-size: 42px;
  line-height: 50.4px;
`;

const OuterWrapper = styled.div`
  label: OuterWrapper;
  display: flex;
  justify-content: center;
`

export const AddToCart: React.FC<AddToCartProps> = ({}) => {
  return (
    <OuterWrapper>
      <AddToCartWrapper>ADD TO CART</AddToCartWrapper>
    </OuterWrapper>
  );
};
