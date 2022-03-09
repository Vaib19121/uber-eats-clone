let defaultstate = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultstate, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
        let newstate = { ...state };
        if (action.payload.checkboxValue) {
            console.log("ADD_TO_CART");
            newstate.selectedItems = {
            items: [...state.selectedItems.items, action.payload],
            restaurantName: action.payload.restaurantName,
            };
         }    
        else {
            console.log('REMOVE FROM CART!');
            newstate.selectedItems = {
                items: [ ...state.selectedItems.items.filter((item) => item.title !== action.payload.title)],
                restaurantName: action.payload.restaurantName,
            };
        }
        return newstate; 
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
