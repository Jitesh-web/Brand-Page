import React, { useState } from "react";
import Nike from "../../assets/brand_logo.png";
import Menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="brandHeader">
      <img src={Nike} alt="Nike Image" className="brandImg" />
      <div className="brandsNav">
        <Link to="#" className="brandNav">
          MENU
        </Link>
        <Link to="#" className="brandNav">
          LOCATION
        </Link>
        <Link to="#" className="brandNav">
          ABOUT
        </Link>
        <Link to="#" className="brandNav">
          CONTACT
        </Link>
      </div>
      <button className="loginBtn">Login</button>
      <img
        src={Menu}
        alt="Menu"
        className="menuIcon"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="menusNav" style={{ display: showMenu ? "flex" : "none" }}>
        <Link to="#" className="menuNav" onClick={() => setShowMenu(false)}>
          MENU
        </Link>
        <Link to="#" className="menuNav" onClick={() => setShowMenu(false)}>
          LOCATION
        </Link>
        <Link to="#" className="menuNav" onClick={() => setShowMenu(false)}>
          ABOUT
        </Link>
        <Link to="#" className="menuNav" onClick={() => setShowMenu(false)}>
          CONTACT
        </Link>
        <Link to="#" className="menuNav" onClick={() => setShowMenu(false)}>
          LOGIN
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
