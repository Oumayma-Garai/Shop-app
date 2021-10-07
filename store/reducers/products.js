import PRODUCTS from "./../../data/dummy-data";
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: [],
};
export default (state = initialState, actions) => {
  return state;
};
