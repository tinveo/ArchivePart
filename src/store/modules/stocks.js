
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