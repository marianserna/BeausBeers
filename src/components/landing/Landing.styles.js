import styled from 'styled-components';

const Logo = styled.img`
  width: 400px;
  display: block;

  @media (max-width: 810px) {
    width: 250px;
  }
`;

const LandingHeading = styled.h1`
  font-size: 5rem;
  margin-top: 50px;
  text-shadow: 1px 1px #c4a077;

  @media (max-width: 810px) {
    font-size: 3rem;
  }
`;

export { Logo, LandingHeading };
