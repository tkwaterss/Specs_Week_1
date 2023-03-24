import React from 'react';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <CreateAccount />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
