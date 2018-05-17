import styled from 'styled-components';

const MainContainer = styled.main`
  width: 95vw;
  height: 90vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 1165px) {
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    margin-top: 120px;
  }
`;

const BeerContainer = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;

  @media (max-width: 1165px) {
    width: 100%;
    height: 50vh;
    display: block;
    text-align: center;
  }
`;

const BeerImage = styled.img`
  height: 90%;
  max-height: 100%;
  max-width: 100%;
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

  @media (max-width: 1165px) {
    width: 100%;
    display: block;
    text-align: center;
    padding: 50px;
  }
`;

const InfoSectionHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 50px;
`;

const InfoSectionPara = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  max-width: 65%;
  margin-bottom: 20px;

  @media (max-width: 1165px) {
    max-width: 100%;
  }
`;

const StoreInfo = styled.div`
  display: flex;
  text-align: left;

  &:first-child {
    margin-top: 20px;
  }

  @media (max-width: 1165px) {
    width: 100%;
    justify-content: center;
  }
`;

const StoreName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-right: 20px;
  align-items: center;
`;

const AddressLink = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  color: #522c1b;
  transition: text-decoration 1s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  MainContainer,
  BeerContainer,
  BeerImage,
  InfoSection,
  InfoSectionHeading,
  InfoSectionPara,
  StoreInfo,
  StoreName,
  AddressLink
};
