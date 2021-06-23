import { AddItem } from "@spree/storefront-api-v2-sdk/types/interfaces/endpoints/CartClass";
import { IOrder } from "@spree/storefront-api-v2-sdk/types/interfaces/Order";
import { IOAuthToken } from "@spree/storefront-api-v2-sdk/types/interfaces/Token";
import { useQuery } from "react-query";
import { spreeClient } from "../../config/spree";
import { QueryKeys } from "../queryKeys";

export const showCart = async () => {
  const storage = (await import("../../config/storage")).default;
  const token = await storage.getToken();
  if (token) {
    const getCart = await spreeClient.cart.show({ bearerToken: token.access_token });
    if (getCart.isSuccess()) {
      console.log("CART SUCCESS");
      return getCart.success();
    } else {
      const newCart = await spreeClient.cart.create({ bearerToken: token.access_token });
      if (newCart.isSuccess()) {
        console.log("CREATE NEW CART");
        return newCart.success();
      } else {
        throw new Error(newCart.fail().message);
      }
    }
  } else {
    const orderToken = storage.getGuestOrderToken();
    if (orderToken) {
      const response = await spreeClient.cart.show(orderToken);
      if (response.isSuccess()) {
        console.log("GUEST CART SUCCESS");
        return response.success();
      } else {
        throw new Error(response.fail().message);
      }
    } else {
      console.log("CREATE GUEST CART");
      const response = await spreeClient.cart.create();
      if (response.isSuccess()) {
        const result = response.success();
        storage.setGuestOrderToken({ orderToken: result.data.attributes.token });
        return result;
      } else {
        throw new Error(response.fail().message);
      }
    }
  }
};

const addItem = async (item: AddItem) => {
  const storage = (await import("../../config/storage")).default;
  const token = await storage.getToken();
  if (!token) {
    return;
  }
  const response = await spreeClient.cart.addItem({ bearerToken: token.access_token }, item);
  if (response.isSuccess()) {
    return response.success();
  } else {
    console.warn(response.fail());
  }
};

export const useCart = () => {
  return useQuery<IOrder, false>([QueryKeys.CART], () => showCart());
};
