import { createStore, combineReducers } from "redux";

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
