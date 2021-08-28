export interface ProductVariationsProps {}

export interface ColorCellProps {
    colorValue: string
    colorName: string
}

export interface PackQtyCellProps {
    packQty: number
    updatePackQty: (newQty) => void
} 

export interface PieceQtyCellProps {
    pieceQty: number
}

export interface PackPriceCellProps {
    packPrice: number
}