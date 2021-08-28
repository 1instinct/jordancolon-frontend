import * as React from "react";
import { useRouter } from "next/router";
import {
  Layout,
  ProductHeader,
  ProductVariations,
  PackSizeInventory,
  PointsEarned,
  AddToCart
} from "../components";
import { useProduct } from "../hooks/useProduct";
import { useMutation, useQueryClient } from "react-query";
import { addItemToCart } from "../hooks/useCart";
import { QueryKeys } from "../hooks/queryKeys";
import * as tracking from "../config/tracking";
import styled from "@emotion/styled";

const TotalPrice = styled.h3`
  label: TotalPrice;
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 24.99px;
  line-height: 29.98px;
  color: #000;
  margin: 0;
`;

const PriceRow = styled.div`
  label: PriceRow;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
`;

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isSuccess } = useProduct(`${id}`);
  const queryClient = useQueryClient();
  const addToCart = useMutation(addItemToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.CART);
    }
  });

  console.log("data", data);
  React.useEffect(() => {
    if (isSuccess) {
      tracking.trackEvent({
        action: tracking.Action.VIEW_PRODUCT,
        category: tracking.Category.PRODUCT_DETAIL,
        label: data?.data?.attributes?.name
      });
    }
  }, [`${id}`, isSuccess]);

  if (isLoading) {
    return <div>Loading Product...</div>;
  }

  if (isSuccess) {
    const variants = data?.data.relationships.variants.data;

    const handleAddToCart = () =>
      addToCart.mutate({
        variant_id: Array.isArray(variants) ? variants[0].id : "",
        quantity: 1
      });
    const imageSource =
      Array.isArray(data?.included) && data?.included[0]?.attributes?.styles?.[2].url;
    const source = imageSource
      ? `http://localhost:8080${imageSource}`
      : "https://via.placeholder.com/150";

    return (
      <Layout>
        <ProductHeader />
        <ProductVariations />
        <PackSizeInventory />
        <PriceRow>
          <TotalPrice> TOTAL PRICE $1000 </TotalPrice>
          <PointsEarned />
        </PriceRow>
        <AddToCart />

        {/* <div className="product-container">
          <img src={source} />
          <h1>{data?.data?.attributes?.name}</h1>
          <div>
            <PriceBlock>
              <h3>${data?.data?.attributes?.price}</h3>
              <span> Per piece </span>
            </PriceBlock>
          </div>
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </div> */}
      </Layout>
    );
  }
  return <div>PRODUCT NOT FOUND</div>;
};

export default ProductDetail;
