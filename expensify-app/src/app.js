import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configure-store";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/style.scss";
import "normalize.css/normalize.css";

const store = configureStore();

store.dispatch(
    addExpense({ description: "water bill", amount: 70000, createdAt: 112 })
);
store.dispatch(
DMMHEHE Fellow    addExpense({ description: "gas-bill", amount: 200, createdAt: 132 })
);
store.dispatch(
  addExpense({ description: "rent", amount: 50000, createdAt: 12 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
