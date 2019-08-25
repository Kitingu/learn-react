import { createStore, combineReducers } from "redux";

// Expenses Reducer
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    // case value:
    //   break;

    default:
      return state;
  }
};

// filtersReducer
const filtersReducerDefault = {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefault , action) => {
    switch (action.type) {
        // case value:
        //   break;

        default:
            return state;
    }
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filtersReducer
  })
);
console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "asdf",
      description: "january rent",
      note: "this was the final payment",
      amount: 54000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
