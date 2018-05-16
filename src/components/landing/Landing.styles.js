import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingContainer = styled.div`
  width: 95vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f5dfbe;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 810px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Logo = styled.img`
  width: 400px;
  display: block;

  @media (max-width: 810px) {
    width: 250px;
  }
`;

const LandingHeading = styled.h1`
  font-size: 5rem;
  color: #522c1b;
  margin-top: 50px;
  text-shadow: 1px 2px #c4a077;

  @media (max-width: 810px) {
    font-size: 3rem;
  }
`;

const BeerSelection = styled(Link)`
  border: 3px solid #c4a077;
  padding: 15px 50px;
  margin-top: 30px;
  color: #522c1b;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-weight: bolder;
  }
`;

export {
  OuterContainer,
  LandingContainer,
  Logo,
  LandingHeading,
  BeerSelection
};
