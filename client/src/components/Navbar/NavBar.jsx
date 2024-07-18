import { Link } from "react-router-dom";

import logo from "../../assets/images/emocheezy.png";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src={logo}
          alt="Retourner à la page d'accueil"
          className="navbar__logo"
        />
      </Link>

      <ul className="navbar__list">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">About</li>
        <li className="navbar__item">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
