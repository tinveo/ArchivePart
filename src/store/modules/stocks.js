
import stocks from '../../data/stocks';

const state = {
  stocks: []
};

// how do we want to modify our state?
// we need to define the mutations
const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random()) - 0.5);
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },