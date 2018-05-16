import React, { Component } from 'react';

import {
  OuterContainer,
  LandingContainer,
  Logo,
  LandingHeading,
  BeerSelection
} from './Landing.styles';
import barley from '../../images/barley.svg';

class Landing extends Component {
  render() {
    return (
      <OuterContainer>
        <LandingContainer>
          <Logo src={barley} />
          <LandingHeading>Beau's Seasonal</LandingHeading>
          <BeerSelection to="/beers">OUR SELECTION</BeerSelection>
        </LandingContainer>
      </OuterContainer>
    );
  }
}

export default Landing;
