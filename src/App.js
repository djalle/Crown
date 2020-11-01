import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component.jsx'
import SignInSignUpPage from './pages/signin-signup/sign-component'
import {auth} from './firebase/firebase-utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  keluarDariAuth = null; 

  componentWillUnmount() {
    this.keluarDariAuth();
  }

  componentDidMount() {
    this.keluarDariAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
