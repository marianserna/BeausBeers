import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import TinyLogo from '../tinyLogo/TinyLogo';

import {
  MainContainer,
  BeerContainer,
  BeerImage,
  InfoSection,
  InfoSectionHeading,
  InfoSectionPara,
  StoreInfo,
  StoreName,
  AddressLink
} from './Beer.styles';

@inject('BeersStore')
@observer
class Beer extends Component {
  static propTypes = {
    BeersStore: PropTypes.shape({}).isRequired
  };

  componentDidMount() {
    this.props.BeersStore.fetchStores(this.props.match.params.id);
  }

  render() {
    if (this.props.BeersStore.beers.length === 0) {
      return 'Loading...';
    }

    const beer = this.props.BeersStore.beers.find(
      beer => beer.id.toString() === this.props.match.params.id
    );

    if (beer) {
      return (
        <div className="outerContainer">
          <div className="innerContainer">
            <TinyLogo />

            <MainContainer>
              <BeerContainer>
                <BeerImage src={beer.image_url} alt={beer.id} />
              </BeerContainer>
              <InfoSection>
                <InfoSectionHeading>{beer.name}</InfoSectionHeading>
                <InfoSectionPara>
                  {beer.style ? beer.style : 'Delicious'}
                </InfoSectionPara>
                <InfoSectionPara>
                  {beer.description ||
                    beer.tasting_note ||
                    'No Description Available'}
                </InfoSectionPara>

                {this.props.BeersStore.stores.map(store => {
                  return (
                    <StoreInfo key={store.id}>
                      <StoreName>{store.name}</StoreName>

                      <AddressLink
                        href={`https://www.google.com/maps/dir/?api=1&destination=${
                          store.address_line_1
                        }+${store.city}`}
                        target="_blank"
                      >
                        {store.address_line_1}, {store.city}
                      </AddressLink>
                    </StoreInfo>
                  );
                })}
                {this.props.BeersStore.storesStatus === 'loaded' &&
                  this.props.BeersStore.stores.length === 0 && (
                    <span style={{ color: 'red', fontSize: '30' }}>
                      Sold Out
                    </span>
                  )}

                <Link to="/beers" className="selection">
                  OUR SELECTION
                </Link>
              </InfoSection>
            </MainContainer>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/beers" />;
    }
  }
}

export default Beer;
