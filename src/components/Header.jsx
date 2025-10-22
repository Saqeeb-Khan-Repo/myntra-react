import { IoPersonSharp } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { LuMessageSquareHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log("bag contains", bag);

  return (
    <header className="header">
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="https://i.pinimg.com/736x/10/8f/fd/108ffd534d2076aa59babdb3b925438d.jpg"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <Link className="action_container" to="/Contact">
          <IoPersonSharp />
          <span className="action_name profile">Profile</span>
        </Link>

        <Link className="action_container" to="/Wishlist">
          <LuMessageSquareHeart />
          <span className="action_name">Wishlist</span>
        </Link>

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bags</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
