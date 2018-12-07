import React from 'react';

const About = (props) => {
  return (
    <div id="About">
      <article className="format_text">
        <h1>About Blunderly</h1>
        <p>The word blunder is a verb for the act of commiting a stupid mistake, so try not to blunder about when you are on blunderly... hahaha.</p>
        <p>Blunderly is my final project for a computer science web backend online course from BYU-Idaho(what a mouthfull... maybe I should be linking things?). I find instant messaging amazing and when I started using slack I realized it was just a glorified way of sending messages... and that was it. Oh yeah maybe it has the option to add links or upload and send assets sure thats all well and good but its main purpose is to meerly communicate in an instant messaging kind of way.</p>
        <p>This is the closest thing I have been able to make in the time I have been given to a slack clone (should probably try and find a better way to put that but hey limited time).</p>
        <p>Have a good time messaging other people on Blunderly currently any account can message any other one so... yeah not the most private of things. Use at your own risk! But have fun too!</p>
        <h2>For you technical nerds out there:</h2>
        <p>Blunderly was built in react on the front end node express on the backend and a free heroku postgres database.</p>
      </article>
    </div>
  );
}

export default About; 