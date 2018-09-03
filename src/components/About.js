import React from 'react';
import {Link} from 'react-router-dom';

const About = () => (
  <div>
    <br />
    <Link className="btn grey" to="/">Back</Link>

    <h3>About</h3>
    This webapp tracks the amount of F&B wastage to help airline companies collecting data about passengers consumption.
    <br/><br/>
    Developed by <a href="mailto:julien.regnault@gmail.com">Julien Regnault</a> for the <a href="https://appchallenge.singaporeair.com/en/challenges/appchallenge-2018">Singapore Airlines AppChallenge 2018</a>.
  </div>
)

export default About;
