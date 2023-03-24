import React from "react";
import "./Header.css";
import headerImage from "./header-image.png"

const Header = () => {
  return (
    <div className="header">
      <img className="header-image" src={headerImage} alt="header" />
      <div className="header-links">
        <a href="">Create Account</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Header;
