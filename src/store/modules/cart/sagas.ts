import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { StoreState } from "../..";
import { api } from "../../../services/api";
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from "./actions";
import { ActionTypes } from "./types";

type CheckProductStockProps = ReturnType<typeof addProductToCartRequest>;

type StockResponse = {
  id: number;
  quantity: number;
};

function* checkProductStock(action: CheckProductStockProps) {
  const { product } = action.payload;

  const curentQuantity: number = yield select((state: StoreState) => {
    return state.cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<StockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > curentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)]);
