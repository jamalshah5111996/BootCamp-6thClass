const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
    case "DELETE": {
      let array = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.payload) {
          array.push(state[i]);
        }
      }
      return array;
    }
    default:
      return state;
  }
};
      

export default TransactionReducer;