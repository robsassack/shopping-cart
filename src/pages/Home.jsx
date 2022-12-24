import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to='/shop'><button>Go to Shop</button></NavLink>
    </div>
  );
}

export default Home;
