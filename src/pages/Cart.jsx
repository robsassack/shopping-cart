import parts from "../data/partsData";

function Cart(props) {
  let displayCart = props.cart.map((item) => {
    return <li key={item.id}>{item.id} - x{item.quantity}</li>;
  });

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {displayCart}
      </ul>
    </div>
  );
}

export default Cart;
