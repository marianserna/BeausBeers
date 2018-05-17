import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import ReactResizeDetector from 'react-resize-detector';

import TinyLogo from '../tinyLogo/TinyLogo';

import {
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
    numSlides: 4
  };

  static propTypes = {
    BeersStore: PropTypes.shape({}).isRequired
  };

  componentDidMount() {
    window.dispatchEvent(new Event('resize'));
  }

  render() {
    const settings = {
      speed: 500,
      slidesToShow: this.state.numSlides,
      slidesToScroll: this.state.numSlides,
      width: '80%',
      framePadding: '50px 0px',
      dragging: false
    };

    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <TinyLogo />
          <CarouselContainer>
            <ReactResizeDetector
              handleWidth
              onResize={width => {
                if (width > 1024) {
                  this.setState({ numSlides: 4 });
                } else if (width > 810) {
                  this.setState({ numSlides: 2 });
                } else {
                  this.setState({ numSlides: 1 });
                }
              }}
            />
            <BeerCarousel {...settings}>
              {this.props.BeersStore.beersWithImages.map(beer => (
                <BeerLink to={`/beers/${beer.id}`} key={beer.id}>
                  <BeerFigure>
                    <BeerImage src={beer.image_thumb_url} alt={beer.name} />
                    <BeerName>
                      {beer.name
                        .replace("Beau's ", '')
                        .split(' ')
                        .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
                        .join(' ')}
                    </BeerName>
                  </BeerFigure>
                </BeerLink>
              ))}
            </BeerCarousel>
          </CarouselContainer>
        </div>
      </div>
    );
  }
}

export default Beers;
