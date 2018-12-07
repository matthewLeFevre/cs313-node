import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
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
    this.login = this.login.bind(this);
    this.state = {
      accountInfo: {
        accountLoggedIn: false,
      }
    }
  }

  login (accountInfo) {
    this.setState({
      accountInfo: {
        accountLoggedIn: true,
        accountid: accountInfo.accountid,
        accountLevel: 'user',
      }
    });
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
            <Route path="/" exact={true}  component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" render={(props) => this.state.accountInfo.accountLoggedIn 
                                                      ? <Redirect to="/dashboard" />
                                                      : <Login login={this.login} {...props} />
                                                    } />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" render={(props) => <Dashboard accountInfo={this.state.accountInfo} {...props}/>} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
