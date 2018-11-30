import React from 'react';

class Party extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dispatches: [],
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
    // this.setState({
    //   dispatches: [
    //     {dispatchText: "hello how are you today?", accountId: 2, accountName: "Jol"},
    //     {dispatchText: "I am doing well how are you?", accountId: 1, accountName: "Matt"},
    //     {dispatchText: "It was a bit snowy today.", accountId: 2, accountName: "Jol"},
    //     {dispatchText: "I enjoyed going to the movies last night.", accountId: 1, accountName: "Matt"},
    //   ],
    // });
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
                <input type="text" className="input full btn-pair" />
                <button className="btn--input">Send</button>
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
  if(props.dispatch.accountId === props.accountInfo.accountId) {
    display = "dispatch self";
  }
  return (
    <div className={display}>{props.dispatch.dispatchText}</div>
  );
};