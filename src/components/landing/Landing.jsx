import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import barley from '../../images/barley.svg';

import {
  OuterContainer,
  LandingContainer,
  Logo,
  LandingHeading,
  BeerSelection
} from './Landing.styles';

class Landing extends Component {
  render() {
    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <Logo src={barley} />
          <LandingHeading>Beau's Seasonal</LandingHeading>
          <Link to="/beers" className="selection">
            OUR SELECTION
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
