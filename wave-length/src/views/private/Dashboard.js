import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Parties from './Parties';
import Settings from './Settings';
import Admin from './Admin';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      parties: []
    };
  } 
  componentDidMount() {
    fetch(`/partiesByAccount/${this.props.accountInfo.accountId}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({parties: res.data});
    })
    // this.setState({
    //   parties: [
    //     {partyid: 1, partyname: "joll's party", partycreated: new Date(), accountId: 5},
    //     {partyid: 2, partyname: "matt's party", partycreated: new Date(), accountId: 4},
    //     {partyid: 3, partyname: "amy's party", partycreated: new Date(), accountId: 2},
    //     {partyid: 4, partyname: "rachel's party", partycreated: new Date(), accountId: 3},
    //   ]
    // });
  }
  render () {
    return (
      <div id="Dashbaord">
        <Switch>
          <Route path="/dashboard/parties" render={(props) => <Parties accountInfo={this.props.accountInfo} parties={this.state.parties} {...props} />} />
          <Route path="/dashboard/settings" render={(props) => <Settings {...props} />} />
          <Route path="/dashboard/admin" render={(props) => 
            this.state.isAdmin
            ? <Admin {...props} />
            : <Redirect to="/login" />
           }/>
        </Switch>
      </div>
    );
  }
}

export default Dashboard;