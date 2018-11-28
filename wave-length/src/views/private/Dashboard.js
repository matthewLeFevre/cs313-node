import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Parties from './Parties';
import Dispatch from './Dispatch';
import Settings from './Settings';
import Admin from './Admin';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  } 
  componentDidMount() {
    console.log("mounted dashbaord");
  }
  render () {
    return (
      <div id="Dashbaord">
        <Switch>
          <Route path="/dashboard/parties" render={(props) => <Parties accountInfo={this.props.accountInfo} {...props} />} />
          <Route path="/dashboard/dispatch" render={(props) => <Dispatch {...props} />} />
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