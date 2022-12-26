import { useParams, Link } from "react-router-dom";
import parts from "../data/partsData";

function Item(props) {
  const params = useParams();
  const { type, id } = params;
  const item = parts[type].find((item) => item.id === id);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <Link to='/cart'>
        <button onClick={() => props.addToCart(item)}>Add to cart</button>
      </Link>
    </div>
  );
}

export default Item;
