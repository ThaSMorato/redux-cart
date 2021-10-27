import { useSelector } from "react-redux";
import { StoreState } from "../../store";
import { CartItem } from "../../store/modules/cart/types";

export const Cart = () => {
  const cart = useSelector<StoreState, CartItem[]>((state) => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preco</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(({ product, quantity }) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{quantity}</td>
            <td>{(product.price * quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
