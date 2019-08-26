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

//edit expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// sort by date
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//set start date
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
});

//set end date
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
});
// Expenses Reducer
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
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
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };

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

// const expenseOne = store.dispatch(
//   addExpense({ description: "rent", amount: 100 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "school-fee", amount: 500 })
// );
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 580000 }));
// store.dispatch(setTextFilter("rent"));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(1221));
store.dispatch(setStartDate());
store.dispatch(setEndDate(152));
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
