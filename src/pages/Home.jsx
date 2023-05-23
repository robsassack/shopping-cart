import { NavLink } from "react-router-dom";
import photo from "../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";

function Home() {
  document.title = "Computer World";

  return (
    <div className="home">
      <div className="home--image-container">
        <img src={photo} alt='Photo of Earth' className="home--image" />
      </div>
      <div className='home--text'>
        <h1>Welcome to Computer World!</h1>
        <p>All of the newest computer parts for the best prices!</p>
        <NavLink to='/shop'>
          <button className="home--button">Go to Shop</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
