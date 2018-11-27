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
  render () {
    return (
      <div id="Dashbaord">
        <Switch>
          <Route path="/parties" render={(props) => <Parties {...props} />} />
          <Route path="/dispatch" render={(props) => <Dispatch {...props} />} />
          <Route path="/settings" render={(props) => <Settings {...props} />} />
          <Route path="/admin" render={(props) => 
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