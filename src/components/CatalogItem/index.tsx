import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { StoreState } from "../../store";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { Product } from "../../store/modules/cart/types";

type CatalogItemProps = {
  product: Product;
};
export const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<StoreState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"   "}
      <button type='button' onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && <span style={{ color: "red" }}> falta de estoque</span>}
    </article>
  );
};
