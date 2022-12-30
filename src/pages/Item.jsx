import { useParams, Link } from "react-router-dom";
import parts from "../data/partsData";

function Item(props) {
  const params = useParams();
  const item = parts.list.find((item) => item.id === params.id);

  return (
    <div className='item'>
      <img src={item.image} alt={item.name} className='item--image' />
      <div className='item--info'>
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <Link to='/cart'>
          <button onClick={() => props.addToCart(item)}>Add to cart</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
