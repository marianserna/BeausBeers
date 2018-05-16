import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import {
  MainContainer,
  BeerContainer,
  BeerImage,
  InfoSection,
  InfoSectionHeading,
  InfoSectionPara,
  StoreName,
  AddressLink
} from './Beer.styles';

@inject('BeersStore')
@observer
class Beer extends Component {
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
            <MainContainer>
              <BeerContainer>
                <BeerImage src={beer.image_url} alt={beer.id} />
              </BeerContainer>
              <InfoSection>
                <InfoSectionHeading>{beer.name}</InfoSectionHeading>
                <InfoSectionPara>
                  Description:{' '}
                  {beer.description ? beer.description : 'Not available'}
                </InfoSectionPara>
                <InfoSectionPara>
                  Style: {beer.style ? beer.style : 'Not available'}
                </InfoSectionPara>
                <div>
                  {this.props.BeersStore.stores.map(store => {
                    return (
                      <div key={store.id}>
                        <StoreName>{store.name}</StoreName>
                        <InfoSectionPara>
                          Address:{' '}
                          <AddressLink
                            href={`https://www.google.com/maps/dir/?api=1&destination=${
                              store.address_line_1
                            }+${store.city}`}
                            target="_blank"
                          >
                            {store.address_line_1}, {store.city}
                          </AddressLink>
                        </InfoSectionPara>
                        <InfoSectionPara>
                          Available: {store.quantity} Units
                        </InfoSectionPara>
                      </div>
                    );
                  })}
                  {this.props.BeersStore.stores.length === 0 && (
                    <span>Sold Out</span>
                  )}
                </div>
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
