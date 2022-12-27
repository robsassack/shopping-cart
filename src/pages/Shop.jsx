import { Link } from "react-router-dom";
import parts from "../data/partsData";

const createItem = (items) => {
  return items.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`/shop/${item.type}/${item.id}`} state={{ item: item }}>
          {item.name}
        </Link>
        <p>{item.price}</p>
      </div>
    );
  });
};

const displayItems = createItem(parts.list);

function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      {displayItems}
    </div>
  );
}

export default Shop;
