import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <button className="w-32">
          <img src={logo} alt="" />
        </button>
      </Link>
      <input type="search" placeholder="Search Your destination" />
      <Link className="ms-28" to="/news">
        News
      </Link>
      <Link to="/news/hotel">Hotel</Link>
      <Link to="/news/destination">Destination</Link>
      <Link to="/news/blog">Blog</Link>
      <Link to="/news/contact">Contact</Link>
      <button className="px-12 bg-orange-500 font-bold text-2xl rounded-md py-3 text-white">
        <Link to='/user/login'>Login</Link>
      </button>
    </div>
  );
};

export default Header;
