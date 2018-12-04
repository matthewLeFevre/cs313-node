import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Party from './Party';
import Globals from '../../services/Globals';

class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.newParty = this.newParty.bind(this);
    this.createParty = this.createParty.bind(this);
    this.handlePartyName = this.handlePartyName.bind(this);
    this.state ={
      toggleNewParty: false,
      partyName: '',
    }
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
  deleteParty(partyid) {
    let body = {
      partyId: partyid,
    }
    let req = Globals.createRequestBody(body);
    fetch('/deleteParty', req)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  }
  newParty() {
    this.setState((prevState) => ({
      toggleNewParty: !prevState.toggleNewParty,
    }));
  }
  handlePartyName(e) {
    this.setState({
      partyName: e.target.value,
    })
  }
  render () {
    return (
      <div className="grid page__full--header">
        <ul className="party__list col--lrg--2 col--mdm--3 col--4 bg-theme-black">
          {this.props.parties.map( (party, index) => {
            let remove = '';
            if(party.accountid === this.props.accountInfo.accountid) {
              remove = <i className="fas fa-times-circle txt-red" onClick={this.deleteParty(party.partyid)}/>;
            }
            return (
              <li className="party__item" key={index}>
                <NavLink activeClassName="party__link active" to={`/dashboard/parties/${party.partyid}`} className="party__link ">{party.partyname}&nbsp;{remove}</NavLink></li>
            );
          })}
          <li className="party__item--btn-pair">
              <fieldset className="field">
                <div className="field--btn-pair">
                  <input type="text" className="input sml" onChange={this.handlePartyName}/>
                  <label className="btn icon btn-pair tiny" onClick={this.createParty}>New</label>
                </div>
              </fieldset>
          </li>
        </ul>
        <Route path="/dashboard/parties/:partyid" render={(props) => <Party accountInfo={this.props.accountInfo} {...props} />} />
      </div>
    );
  }
}

export default Parties;