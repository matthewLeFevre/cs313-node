import React from 'react';
import Globals from '../../services/Globals';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      accountName: "",
      accountPassword: ""
    };
  }

  onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  onLogin() {
    let data = {
      accountName: this.state.accountName,
      accountPassword: this.state.accountPassword,
    }
    let req = Globals.createRequestBody(data);
    fetch("/loginAccount", req)
    .then(res => res.json())
    .then(res => {
      if(res.status === "success") {
        this.props.login(res.data);
      } else {
        window.alert(res.message);
      }
    });
  }

  render() {
    return (
      <div id="login">
        <form className="form--sml">
          <h1 className="form__title">Login</h1>
          <fieldset className="field spacing--bottom--1">
            <label className="label">Account Name</label>
            <input onChange={this.onChange} className="input full main" type="text" name="accountName" />
          </fieldset>
          <fieldset className="field spacing--bottom--2">
            <label className="label">Password</label>
            <input onChange={this.onChange} className="input full main" type="password" name="accountPassword"/>
          </fieldset>
          <fieldset className="field spacing--bottom--1">
            <button onClick={this.onLogin} className="btn primary full breath" type="button">Login</button>
          </fieldset>
        </form>
        <section className="format_text">
          <p>Eventually you will be able to signup with your own account for now there are just preset accounts to sign in. Please choose any number of them for testing.</p>
          <ul>
            <li>name: billey<br/>password: 1234</li>
            <li>name: sally<br/>password: 1234</li>
            <li>name: rick<br/>password: 1234</li>
            <li>name: cassey<br/>password: 1234</li>
            <li>name: matt<br/>password: 1234</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Login;