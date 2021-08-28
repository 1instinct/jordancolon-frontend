import React from 'react';
import { PieceQtyCellProps } from '../types';
import styled from '@emotion/styled';

const PieceQtyCellWrapper = styled.div`
  label: PieceQtyCellWrapper;
  color: #000;
  font-size: 20.11px;
  line-height: 25.14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PieceQtyCell: React.FC<PieceQtyCellProps> = ({ pieceQty }) => {
  return <PieceQtyCellWrapper>{pieceQty}</PieceQtyCellWrapper>;
};

