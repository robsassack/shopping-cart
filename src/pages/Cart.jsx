import { useState, useEffect } from "react";
import parts from "../data/partsData";

function Cart(props) {
  const [total, setTotal] = useState(0);

  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      let itemInfo = parts.list.find((part) => part.id === item.id);
      total += itemInfo.price * item.quantity;
    });
    total = total.toFixed(2);
    setTotal(total);
  }

  useEffect(() => {
    getTotal();
  }, [props.cart]);

  let displayCart = props.cart.map((item) => {
    let itemInfo = parts.list.find((part) => part.id === item.id);
    return (
      <div key={item.id}>
        <li>
          {itemInfo.name} - x{item.quantity} - ${itemInfo.price}
        </li>
        <button onClick={() => props.addToCart(item)}>+</button>
        <button onClick={() => props.removeFromCart(item)}>-</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>{displayCart}</ul>
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default Cart;
