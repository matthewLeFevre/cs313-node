import React from 'react';
import Globals from '../../services/Globals';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
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

  onRegister() {
    let data = {
      accountName: this.state.accountName,
      accountPassword: this.state.accountPassword,
    }
    let req = Globals.createRequestBody(data);
    fetch("/createAccount", req)
    .then(res => res.json())
    .then(res => {
      window.alert(res.message);
    });
  }

  render() {
    return(
      <div id="register">
        <form className="form--sml">
          <h1 className="form__title">Signup</h1>
          <fieldset className="field spacing--bottom--1">
            <label className="label">Account Name</label>
            <input onChange={this.onChange} className="input full main" type="text" name="accountName" />
          </fieldset>
          <fieldset className="field spacing--bottom--2">
            <label className="label">Password</label>
            <input onChange={this.onChange} className="input full main" type="password" name="accountPassword"/>
          </fieldset>
          <fieldset className="field">
            <p>By Clicking the button below you awknowledge that you have read and will abide by the terms of service as well as the privacy policy.</p>
          </fieldset>
          <fieldset className="field spacing--bottom--1">
            <button onClick={this.onRegister} className="btn action full breath" type="button">Signup</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Signup;