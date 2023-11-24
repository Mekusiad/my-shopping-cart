import { FaCartShopping } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

import { useNavigate } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="navigation">
      <button onClick={() => navigate("/")}>
        <IoIosHome size={32} />
      </button>
      <button onClick={() => navigate("/cart")}>
        <FaCartShopping size={32} />
      </button>
    </nav>
  );
};

export default Navigation;
