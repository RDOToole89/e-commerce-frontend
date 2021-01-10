import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignIn-SignUp/SignIn-SignUp';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
