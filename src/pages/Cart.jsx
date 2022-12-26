function Cart(props) {
  // console.log(props);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {props.cart.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Cart;
