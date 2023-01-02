import { Link } from "react-router-dom";
import parts from "../data/partsData";

const createItem = (items) => {
  return items.map((item) => {
    return (
      <Link
        key={item.id}
        className='shop--item'
        to={`/shop/${item.type}/${item.id}`}
        state={{ item: item }}
      >
        <div className='shop--img-container'>
          <img src={item.image} alt={item.name} />
        </div>
        <strong>{item.name}</strong>
        <p>${item.price}</p>
      </Link>
    );
  });
};

const displayItems = createItem(parts.list);

function Shop() {
  return (
    <div className='shop'>
      <h1>Shop Page</h1>
      <div className='shop--items-container'>{displayItems}</div>
    </div>
  );
}

export default Shop;
