import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Slider from 'react-slick';
import ReactResizeDetector from 'react-resize-detector';

import barley from '../../images/barley.svg';

import {
  HomeLink,
  SmallLogo,
  SmallLogoText,
  CarouselContainer,
  BeerCarousel,
  BeerFigure,
  BeerImage,
  BeerName,
  BeerLink
} from './Beers.styles';

@inject('BeersStore')
@observer
class Beers extends Component {
  state = {
    numSlides: 3
  };

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.numSlides,
      slidesToScroll: this.state.numSlides
    };

    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <HomeLink to="/">
            <SmallLogo src={barley} />
            <SmallLogoText>Beau's Seasonal</SmallLogoText>
          </HomeLink>

          <CarouselContainer>
            <ReactResizeDetector
              handleWidth
              onResize={width => {
                console.log(width);
                if (width > 1024) {
                  this.setState({ numSlides: 4 });
                } else if (width > 810) {
                  this.setState({ numSlides: 2 });
                } else if (width > 614) {
                  this.setState({ numSlides: 1 });
                }
              }}
            />
            <BeerCarousel {...settings}>
              {this.props.BeersStore.beers
                .filter(beer => beer.image_thumb_url)
                .map(beer => {
                  return (
                    <BeerLink to={`/beers/${beer.id}`} key={beer.id}>
                      <BeerFigure>
                        <BeerImage src={beer.image_thumb_url} alt={beer.name} />
                        <BeerName>
                          {beer.name
                            .replace("Beau's ", '')
                            .split(' ')
                            .map(
                              word => `${word[0].toUpperCase()}${word.slice(1)}`
                            )
                            .join(' ')}
                        </BeerName>
                      </BeerFigure>
                    </BeerLink>
                  );
                })}
            </BeerCarousel>
          </CarouselContainer>
        </div>
      </div>
    );
  }
}

export default Beers;
