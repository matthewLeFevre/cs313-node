import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Party from './Party';
import Globals from '../../services/Globals';

class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.createParty = this.createParty.bind(this);
    this.handlePartyName = this.handlePartyName.bind(this);
    this.state ={
      partyName: '',
      partyOpen: false,
    }
  }

  componentDidMount() {
    this.props.updateParties(false);
  }

  createParty() {
    let body = {
      partyName: this.state.partyName,
      accountId: this.props.accountInfo.accountid,
    }
    let req = Globals.createRequestBody(body);
    fetch('/createParty', req)
    .then(res => res.json())
    .then(res =>{
      this.props.updateParties(res.data);
      console.log(res);
    });
  }

  handlePartyName(e) {
    this.setState({
      partyName: e.target.value,
    });
  }

  partyOpen() {
    this.setState = ({
      partyOpen: true,
    });
  }

  render () {
    return (
      <div className="grid page__full--header">
        <ul className="party__list col--lrg--2 col--mdm--3 col--4 bg-theme-black">
          {this.props.parties ? this.props.parties.map( (party, index) => {
            return (
              <li className="party__item" key={index}>
                <NavLink activeClassName="party__link active" to={`/dashboard/parties/${party.partyid}`} className="party__link ">{party.partyname}</NavLink></li>
            );
          }) : ''}
          <li className="party__item--btn-pair">
              <fieldset className="field">
                <div className="field--btn-pair">
                  <input type="text" className="input sml" onChange={this.handlePartyName}/>
                  <label className="btn icon btn-pair tiny" onClick={this.createParty}>New</label>
                </div>
              </fieldset>
          </li>
        </ul> 
        {this.state.partyOpen ? ''
        :  <div className="col--8 col--mdm--9 col--lrg--10 bg-theme-blue">
           <section className="format_text">
            <h1>Welcome to your dashboard</h1>
            <p>On the left you will see the parties that you are a part of either you have created them or someone else has invited your to it.</p>
           </section>
        </div>}
        <Route path="/dashboard/parties/:partyid" render={(props) => <Party accountInfo={this.props.accountInfo} partyOpen={this.partyOpen} {...props} />} />
      </div>
    );
  }
}

export default Parties;