import { Provider } from "react-redux";
import { Cart } from "./components/Cart";
import { Catalog } from "./components/Catalog";
import store from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
};
