import React from 'react';
import { Link } from 'react-router-dom';
import barley from '../../images/barley.svg';

import { Logo, LandingHeading } from './Landing.styles';

export default function Landing() {
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
