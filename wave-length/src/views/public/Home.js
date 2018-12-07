import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
  return (
    <div id="home">
      <section className="home__banner">
        <div className="banner__text">
          <h1 className="banner__title">Blunderly</h1>
          <p className="banner__sub-title">A bungling blooper of a "Slack" clone</p>
          <Link to="/signup" className="btn mid action">Get Started</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;