import React from "react";
import "./Header.css";
import headerImage from "./header-image.png"

const Header = (props) => {

  return (
    <div className="header">
      <img onClick={() => props.changePage('Home')} className="header-image" src={headerImage} alt="header" />
      <div className="header-links">
        <h3 onClick={() => props.changePage('CreateAccountForm')} >Create Account</h3>
        <h3 onClick={() => props.changePage('Login')} >Login</h3>
      </div>
    </div>
  );
};

export default Header;
