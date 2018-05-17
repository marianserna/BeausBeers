import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 70px;
  text-decoration: none;

  @media (max-width: 1165px) {
    top: 30px;
    left: 30px;
  }
`;

const SmallLogo = styled.img`
  width: 50px;
`;

const SmallLogoText = styled.h2`
  font-size: 1.5rem;
  color: #522c1b;
  align-self: flex-end;
`;

export { HomeLink, SmallLogo, SmallLogoText };
