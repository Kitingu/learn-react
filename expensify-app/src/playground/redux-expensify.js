import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import AddExpenseComponentPage from "../components/AddExpenseComponentPage";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// remove expense
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// Expenses Reducer
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

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
const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    // case:value
    // break

    default:
      return state;
  }
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100 })
);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
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
