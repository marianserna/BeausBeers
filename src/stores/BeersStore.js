import { observable, action, computed, runInAction } from 'mobx';
import axios from 'axios';

class BeersStore {
  @observable beers = [];
  @observable stores = [];
  @observable storesStatus = 'initial';
  @observable error = false;

  @computed
  get beersWithImages() {
    return this.beers.filter(beer => beer.image_thumb_url);
  }

  fetchBeers = async () => {
    const url = 'https://lcboapi.com/products';

    try {
      const response = await axios.get(url, {
        params: { q: 'beaus', where: 'is_seasonal', per_page: 30 },
        headers: {
          Authorization: `Token ${process.env.REACT_APP_LCBO_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      runInAction(() => {
        this.beers = response.data.result;
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
      });
    }
  };

  @action
  fetchStores = async product_id => {
    this.stores = [];
    this.storesStatus = 'loading';

    const url = 'https://lcboapi.com/stores';

    try {
      const response = await axios.get(url, {
        params: { product_id },
        headers: {
          Authorization: `Token ${process.env.REACT_APP_LCBO_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      runInAction(() => {
        this.stores = response.data.result
          .filter(store => store.quantity > 0)
          .slice(0, 3);
        this.storesStatus = 'loaded';
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
        this.storesStatus = 'error';
      });
    }
  };
}

export default new BeersStore();
