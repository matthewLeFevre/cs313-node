import React from 'react';

class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    }
  }

  componentDidMount () {
    fetch(`/partiesByAccount/${this.props.accountInfo.accountId}`)
    .then(res => res.json())
    .thnen(res => {
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
              <li>{party.partyName}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Parties;