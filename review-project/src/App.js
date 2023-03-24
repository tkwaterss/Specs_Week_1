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
  const [accounts, setAccounts] = useState([
    {
      userName: "asdf",
      password: "asdf",
      toDoList: ["one", "two", "three"],
    },
    {
      userName: 'tobin',
      password: 'faster',
      toDoList: ['hi','hello','bye']
    },
  ]);
  const [account, setAccount] = useState({});

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

  const updateAccount = (updatedAccount) => {
    setAccounts(...accounts, updatedAccount);

  }
  console.log(accounts)

  return (
    <div className="App">
      <Header changePage={changePage} />

      {viewPage === "Home" && <Home />}
      {viewPage === "CreateAccountForm" && (
        <CreateAccountForm addAccount={addAccount} accounts={accounts} />
      )}
      {viewPage === "Login" && (
        <LoginForm accounts={accounts} changePage={viewAccount} />
      )}
      {viewPage === "Account" && <AccountPage account={account} updateAccount={updateAccount}/>}

      <Footer />
    </div>
  );
}

export default App;
