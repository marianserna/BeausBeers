import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import barley from '../../images/barley.svg';

import { HomeLink, SmallLogo, SmallLogoText } from './TinyLogo.styles';

class TinyLogo extends Component {
  render() {
    return (
      <HomeLink to="/">
        <SmallLogo src={barley} />
        <SmallLogoText>Beau's Seasonal</SmallLogoText>
      </HomeLink>
    );
  }
}

export default TinyLogo;
