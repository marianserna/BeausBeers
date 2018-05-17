import React from 'react';
import barley from '../../images/barley.svg';

import { HomeLink, SmallLogo, SmallLogoText } from './TinyLogo.styles';

export default function TinyLogo() {
  return (
    <HomeLink to="/">
      <SmallLogo src={barley} />
      <SmallLogoText>Beau's Seasonal</SmallLogoText>
    </HomeLink>
  );
}
