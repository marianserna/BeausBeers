import { observable, action } from 'mobx';
import axios from 'axios';

class BeersStore {
  @observable beers = [];

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
      console.log(response.data.result);
    } catch (error) {}
  };
}

export default new BeersStore();
