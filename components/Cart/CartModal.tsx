import * as React from "react";
import { useCart } from "../../hooks/useCart";

interface Props {
  visible: boolean;
}

export const CartModal = (props: Props) => {
  const { data, isLoading, isError } = useCart();
  if (!props.visible) {
    return null;
  }
  if (isLoading) {
    return <div className="cart-modal">Loading Cart...</div>;
  } else if (isError) {
    return <div className="cart-modal">Sorry something went wrong...</div>;
  }
  return (
    <>
      <div className="cart-modal">
        <h2>YOUR CART</h2>
        <div>Items: {data?.data.attributes.item_count}</div>
        <div>Cost: {data?.data.attributes.display_item_total}</div>
        <div>Tax: {data?.data.attributes.included_tax_total}</div>
        <div>Total: {data?.data.attributes.display_total}</div>
      </div>
      <style jsx>{`
        .cart-modal {
          background-color: white;
          padding: 50px;
          border: 2px grey solid;
          position: absolute;
          top: 150px;
          right: 50px;
        }
      `}</style>
    </>
  );
};
