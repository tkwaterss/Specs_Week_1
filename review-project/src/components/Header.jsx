import React, { useContext } from "react";
import "./Header.css";
import headerImage from "./header-image.png";
import AccountContext from "../state/AccountContext";

const Header = (props) => {
  let { changePage } = props;
  const { accountState, dispatchAccount } = useContext(AccountContext);

  const logOut = () => {
    dispatchAccount({ type: "LOGOUT" });
    changePage("Home");
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
        {accountState.isLoggedIn === false && (
          <h3
            className="header-link"
            onClick={() => changePage("CreateAccountForm")}
          >
            Create Account
          </h3>
        )}
        {accountState.isLoggedIn === false && (
          <h3 className="header-link" onClick={() => changePage("Login")}>
            Login
          </h3>
        )}
        {accountState.isLoggedIn === true && (
          <h3 className="header-link" onClick={() => changePage("Account")}>
            Account
          </h3>
        )}
        {accountState.isLoggedIn === true && (
          <h3 className="header-link" onClick={logOut}>
            Log Out
          </h3>
        )}
      </div>
    </div>
  );
};

export default Header;
