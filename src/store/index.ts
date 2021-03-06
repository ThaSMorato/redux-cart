import { applyMiddleware, createStore } from "redux";
import { CartState } from "./modules/cart/types";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface StoreState {
  cart: CartState;
}

const sagaMiddleware = createSagaMiddleware();

const midlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...midlewares)));

sagaMiddleware.run(rootSaga);

export default store;
