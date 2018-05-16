import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';

@inject('BeersStore')
@observer
class Beers extends Component {
  render() {
    return (
      <section>
        {this.props.BeersStore.beers
          .filter(beer => beer.image_thumb_url)
          .map(beer => {
            return (
              <figure key={beer.id}>
                <img src={beer.image_thumb_url} alt={beer.name} />
                <figcaption>{beer.name}</figcaption>
              </figure>
            );
          })}
      </section>
    );
  }
}

export default Beers;
