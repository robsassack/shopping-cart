import { Link } from "react-router-dom";
import parts from "../data/partsData";

const createItem = (items, type) => {
  return items.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`/shop/${type}/${item.id}`} state={{ item: item }}>
          {item.name}
        </Link>
        <p>{item.price}</p>
      </div>
    );
  });
};

const cpuItems = createItem(parts.cpu, "cpu");
const moboItems = createItem(parts.mobo, "mobo");
const gpuItems = createItem(parts.gpu, "gpu");

function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      {cpuItems}
      {moboItems}
      {gpuItems}
    </div>
  );
}

export default Shop;
