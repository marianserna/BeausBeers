import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

const CarouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BeerCarousel = styled(Carousel)`
  margin-bottom: 80px;
`;

const BeerFigure = styled.figure`
  text-decoration: none;
  border: 3px solid #fff;
  transition: border 1s ease;
  padding: 15px;
  text-align: center;
`;

const BeerLink = styled(Link)`
  text-decoration: none;
`;

const BeerImage = styled.img`
  width: 250px;
  margin: 0 auto;
`;

const BeerName = styled.figcaption`
  text-align: center;
  color: #a5babb;
  font-size: 1.2rem;
  font-weight: bolder;
  text-decoration: none;
`;

export {
  CarouselContainer,
  BeerCarousel,
  BeerFigure,
  BeerLink,
  BeerImage,
  BeerName
};
