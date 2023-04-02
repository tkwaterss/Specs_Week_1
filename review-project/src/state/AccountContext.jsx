import React, { createContext, useReducer } from "react";

let initalAccountState = {
  isLoggedIn: false,
  account: {
    userName: "",
    password: "",
    toDoList: [],
  },
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, account: action.payload };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        account: {
          userName: "",
          password: "",
          toDoList: [],
        },
      };
    default:
      return {...state}
  }
};

const AccountContext = createContext();

const AccountContextProvider = (props) => {
  const [accountState, dispatchAccount] = useReducer(
    accountReducer,
    initalAccountState
  );

  return (
    <AccountContext.Provider value={{ accountState, dispatchAccount }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountContextProvider };
export default AccountContext;
