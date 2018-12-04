import React from 'react';
import Globals from '../../services/Globals';

class Party extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      dispatches: [],
      dispatchtext: '',
    };
  }
  componentDidMount() {
    fetch(`/dispatchesByParty/${this.props.match.params.partyid}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        dispatches: res.data,
      })
    })
    // console.log("mounted party")
    this.setState({
      dispatches: [
        {dispatchtext: "hello how are you today?", accountid: 2, accountname: "Jol", dispatchcreated: new Date()},
        {dispatchtext: "I am doing well how are you?", accountid: 1, accountname: "Matt", dispatchcreated: new Date()},
        {dispatchtext: "It was a bit snowy today.", accountid: 2, accountname: "Jol", dispatchcreated: new Date()},
        {dispatchtext: "I enjoyed going to the movies last night.", accountid: 1, accountname: "Matt", dispatchcreated: new Date()},
      ],
    });
  }

  deleteParty() {
    let body = {
      partyId: this.props.match.params.partyid,
    }
    let req = Globals.createRequestBody(body);
    fetch('/deleteParty', req)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  }

  createDispatch() {
    let data = {
      accountid: this.props.accountInfo.accountid,
      partyid: this.props.match.params.partyid,
      dispatchtext: this.state.dispatchtext
    }
    let req = Globals.createRequestBody(data);
    fetch('/createDispatch', req)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
  }

  onChange(e) {
    this.setState({
      dispatchtext: e.target.value,
    });
  }
  render() {
    return (
      <article className="col--8 col--mdm--9 col--lrg--10 bg-theme-blue">
        <div className="dispatch__container">
          { this.state.dispatches.map((dispatch, index) => {
            return(<Dispatch dispatch={dispatch} key={index} accountInfo={this.props.accountInfo} />)
          })}
          <form>
            <fieldset className="field btn-pair">
              <div className="field--btn-pair">
                <input type="text" className="input full btn-pair" onChange={this.onChange}/>
                <button className="btn--input" onClick={this.createDispatch}>Send</button>
              </div>
            </fieldset>
          </form>
        </div>
      </article>
    );
  }
}

export default Party;

const Dispatch = (props) => {
  let display = "dispatch";
  let date = new Date(props.dispatch.dispatchcreated);
  if(props.dispatch.accountid === props.accountInfo.accountid) {
    display = "dispatch self";
  }
  return (
    <div className={display}>
      <p className="dispatch__account">{props.dispatch.accountname} <span className="dispatch__time">{date.toDateString()}</span></p>
      <p className="dispatch__message">{props.dispatch.dispatchtext}</p>
    </div>
  );
};