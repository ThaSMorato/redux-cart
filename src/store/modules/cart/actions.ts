import { ActionTypes, Product } from "./types";

export function addProductToCartRequest(product: Product) {
  return {
    payload: {
      product,
    },
    type: ActionTypes.addProductToCartRequest,
  };
}

export function addProductToCartSuccess(product: Product) {
  return {
    payload: {
      product,
    },
    type: ActionTypes.addProductToCartSuccess,
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    payload: {
      productId,
    },
    type: ActionTypes.addProductToCartFailure,
  };
}
