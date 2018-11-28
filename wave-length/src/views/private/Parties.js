import React from 'react';

class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    }
  }

  componentDidMount () {
    console.log('mounting parties');
    fetch(`/partiesByAccount/${this.props.accountInfo.accountId}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        parties: res.data,
      })
    })
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.parties.map( party => {
            return (
              <li>{party.partyname}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Parties;