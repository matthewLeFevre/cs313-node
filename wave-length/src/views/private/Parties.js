import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Party from './Party';

class Parties extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="grid page__full--header">
        <ul className="party__list col--lrg--2 col--mdm--3 col--4 bg-theme-black">
          {this.props.parties.map( (party, index) => {
            return (
              <li className="party__item" key={index}>
                <NavLink activeClassName="party__link active" to={`/dashboard/parties/${party.partyid}`} className="party__link ">{party.partyname}</NavLink></li>
            );
          })}
          <li className="party__add-btn btn action">New Party</li>
        </ul>
        <Route path="/dashboard/parties/:partyid" render={(props) => <Party accountInfo={this.props.accountInfo} {...props} />} />
      </div>
    );
  }
}

export default Parties;