import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const CarouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BeerCarousel = styled(Slider)`
  width: 80vw;
  margin-bottom: 80px;
`;

const BeerFigure = styled.figure`
  text-decoration: none;
  border: 3px solid #fff;
  transition: border 1s ease;
  padding: 15px;

  &:hover {
    border: 3px solid #522c1b;
  }
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
