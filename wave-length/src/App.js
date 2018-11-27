import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './views/static/Header';
import Footer from './views/static/Footer';
import Home from './views/public/Home';
import About from './views/public/About';
import Login from './views/public/Login';
import Signup from './views/public/Signup';
import Dashboard from './views/private/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountInfo: {
        accountLoggedIn: true,
        accountLevel: 'admin'
      }
    }
  }

  logout () {
    return console.log("blue");
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header accountInfo={this.state.accountInfo} logout={this.logout}/>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/singup" component={Signup} />
            <Route path="" render={(props) => <Dashboard {...props}/>} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
