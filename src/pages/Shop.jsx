import { Link } from "react-router-dom";
import cpus from "../data/cpus";
import gpus from "../data/gpus";
import motherboards from "../data/motherboards";

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

const cpuItems = createItem(cpus.cpus, "cpu");
const moboItems = createItem(motherboards.motherboards, "mobo");
const gpuItems = createItem(gpus.gpus, "gpu");

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
