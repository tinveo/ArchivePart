
const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (state.funds >= stockPrice * quantity) {
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
        });
      }
      state.funds -= stockPrice * quantity;
    } else {
      // Can not place this order since we don't have enough money
      console.log('Current Funds: ', state.funds);
      console.log('You are going to spend: ', stockPrice * quantity);
      console.log('CAN NOT AFFORD THIS STOCK PURCHASE!');