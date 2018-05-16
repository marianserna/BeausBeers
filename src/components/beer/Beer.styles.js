import styled from 'styled-components';

const MainContainer = styled.main`
  width: 95vw;
  height: 90vh;
  display: flex;

  @media (max-width: 1165px) {
    flex-direction: column;
  }
`;

const BeerContainer = styled.div`
  height: 100%;
  width: 35%;

  @media (max-width: 1165px) {
    width: 100vw;
    height: 100vh;
  }
`;

const BeerImage = styled.img`
  max-height: 100%;
`;

const InfoSection = styled.section`
  height: 100%;
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5dfbe;
  overflow: hidden;
`;

const InfoSectionHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 50px;
`;

const InfoSectionPara = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`;

const StoreName = styled.h3`
  font-size: 1.5rem;
  line-height: 3rem;
  margin-top: 20px;
`;

const AddressLink = styled.a`
  text-decoration: none;
  color: #a5babb;
  background: #fff;
  padding: 5px;
`;

export {
  MainContainer,
  BeerContainer,
  BeerImage,
  InfoSection,
  InfoSectionHeading,
  InfoSectionPara,
  StoreName,
  AddressLink
};
