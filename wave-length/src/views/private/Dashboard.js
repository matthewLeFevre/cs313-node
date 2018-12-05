import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Parties from './Parties';
import Settings from './Settings';
import Admin from './Admin';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.updateParties = this.updateParties.bind(this);
    this.state = {
      parties: []
    };
  } 
  componentDidMount() {
    fetch(`/partiesByAccount/${this.props.accountInfo.accountid}`)
    .then(res => res.json())
    .then(res => {
      this.setState({parties: res.data});
    });
  }

  updateParties(parties) {
    if(parties) {
      this.setState({
        parties: parties,
      });
    } else {
      fetch(`/partiesByAccount/${this.props.accountInfo.accountid}`)
      .then(res => res.json())
      .then(res => {
        this.setState({parties: res.data});
      });
    }
  }
  render () {
    return (
      <div id="Dashbaord">
        <Switch>
          <Route path="/dashboard/parties" render={(props) => <Parties accountInfo={this.props.accountInfo} parties={this.state.parties} updateParties={this.updateParties} {...props} />} />
          <Route path="/dashboard/settings" render={(props) => <Settings {...props} />} />
          <Route path="/dashboard/admin" render={(props) => 
            this.state.isAdmin
            ? <Admin {...props} />
            : <Redirect to="/login" />
           }/>
          <Redirect to="/dashboard/parties" />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;