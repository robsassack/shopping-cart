import { useLocation } from "react-router-dom";

function Item() {
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <h1>{state.item.name}</h1>
      <p>${state.item.price}</p>
    </div>
  );
}

export default Item;
