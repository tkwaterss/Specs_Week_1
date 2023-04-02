import React, { useState, useContext } from "react";
import CreateAccountForm from "./components/CreateAccount/CreateAccountForm";
import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountPage from "./components/AccountPage/AccountPage";
import AccountContext from "./state/AccountContext";

import "./App.css";

function App() {
  const [viewPage, setViewPage] = useState("Home");
  const { dispatchAccount } = useContext(AccountContext);
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
    dispatchAccount({ type: "LOGIN", payload: account });
    setViewPage(viewPage);
  };

  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div className="App">
      <Header changePage={changePage} />
      {viewPage === "Home" && <Home accounts={accounts} />}
      {viewPage === "CreateAccountForm" && (
        <CreateAccountForm addAccount={addAccount} accounts={accounts} />
      )}
      {viewPage === "Login" && (
        <LoginForm accounts={accounts} viewAccount={viewAccount} />
      )}
      {viewPage === "Account" && <AccountPage />}
      <Footer />
    </div>
  );
}

export default App;
