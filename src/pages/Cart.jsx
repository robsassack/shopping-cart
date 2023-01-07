import { useState, useEffect } from "react";
import parts from "../data/partsData";

function Cart(props) {
  const [total, setTotal] = useState(0);
  document.title = "Computer World - Shopping Cart";

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
      <div key={item.id} className='cart--item'>
        <img src={itemInfo.image} alt={itemInfo.name} className='cart--image' />
        <div className='cart--info'>
          <p className="cart--name">
            {itemInfo.name} - <strong>${itemInfo.price}</strong>
          </p>
          <div className='cart--quantity'>
            <button onClick={() => props.removeFromCart(item)}>-</button>
            <strong>{item.quantity}</strong>
            <button onClick={() => props.addToCart(item)}>+</button>
            <button onClick={() => props.removeItem(item)} className="cart--delete">X</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {props.cart.length === 0 ? (
        <>
          <p className="cart--empty"><strong>Your cart is empty</strong></p>
        </>
      ) : (
        <>
          <ul>{displayCart}</ul>
          <h2 className="cart--total">Total: ${total}</h2>
          <button className="cart--checkout">Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
