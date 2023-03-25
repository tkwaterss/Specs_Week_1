import React, { useState } from "react";
import CreateAccountForm from "./components/CreateAccount/CreateAccountForm";
import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountPage from "./components/AccountPage/AccountPage";

import "./App.css";

function App() {
  const [viewPage, setViewPage] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState({
    userName: "",
    password: "",
    toDoList: [],
  });
  const [accounts, setAccounts] = useState([
    {
      userName: "asdf",
      password: "asdf",
      toDoList: ["one", "two", "three"],
    },
    {
      userName: "tobin",
      password: "faster",
      toDoList: ["hi", "hello", "bye"],
    },
  ]);

  const changePage = (viewPage) => {
    setViewPage(viewPage);
  };

  const viewAccount = (viewPage, account) => {
    setViewPage(viewPage);
    setAccount(account);
  };

  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div className="App">
      <Header
        changePage={changePage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setAccount={setAccount}
      />

      {viewPage === "Home" && <Home accounts={accounts}/>}
      {viewPage === "CreateAccountForm" && (
        <CreateAccountForm addAccount={addAccount} accounts={accounts} />
      )}
      {viewPage === "Login" && (
        <LoginForm
          accounts={accounts}
          viewAccount={viewAccount}
          loggedIn={setIsLoggedIn}
        />
      )}
      {viewPage === "Account" && <AccountPage account={account} />}

      <Footer />
    </div>
  );
}

export default App;
