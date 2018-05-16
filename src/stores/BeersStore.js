import { observable, action } from 'mobx';
import axios from 'axios';

class BeersStore {
  @observable beers = [];
  @observable error = false;

  @action
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

      this.beers = response.data.result;
      // console.log(this.beers);
    } catch (error) {
      this.error = true;
    }
  };
}

export default new BeersStore();
