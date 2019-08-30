import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configure-store";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/style.scss";
import "normalize.css/normalize.css";

const store = configureStore();
store.dispatch(addExpense({ description: "water", amount: 200, createdAt: 1 }));
store.dispatch(
  addExpense({ description: "gas-bill", amount: 200, createdAt: 1 })
);
// store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
ReactDOM.render(<AppRouter />, document.getElementById("app"));
