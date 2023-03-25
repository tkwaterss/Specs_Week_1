import React from "react";
import "./Header.css";
import headerImage from "./header-image.png";

const Header = (props) => {
  let { isLoggedIn, setIsLoggedIn, changePage, setAccount } = props;

  const logOut = () => {
    changePage("Home");
    setIsLoggedIn(false);
    setAccount({
      userName: "",
      password: "",
      toDoList: [],
    });
  };

  return (
    <div className="header">
      <img
        onClick={() => changePage("Home")}
        className="header-image"
        src={headerImage}
        alt="header"
      />
      <div className="header-links">
        {isLoggedIn === false && (
          <h3
            className="header-link"
            onClick={() => changePage("CreateAccountForm")}
          >
            Create Account
          </h3>
        )}
        {isLoggedIn === false && (
          <h3 className="header-link" onClick={() => changePage("Login")}>
            Login
          </h3>
        )}
        {isLoggedIn === true && (
          <h3 className="header-link" onClick={() => changePage("Account")}>
            {/* Still need to make this log the account out */}
            Account
          </h3>
        )}
        {isLoggedIn === true && (
          <h3 className="header-link" onClick={() => logOut()}>
            {/* Still need to make this log the account out */}
            Log Out
          </h3>
        )}
      </div>
    </div>
  );
};

export default Header;
