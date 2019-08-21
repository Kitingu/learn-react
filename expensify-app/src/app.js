import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/style.scss";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => <div>this is from the dashboard</div>;
const AddExpenseComponent = () => <div>this is add expense </div>;
const EditComponent = () => <div>this is edit expense </div>;
const HelpComponent = () => <div>this is help expense </div>;
const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpenseComponent} />
      <Route path='/edit' component={EditComponent} />
      <Route path='/help' component={HelpComponent} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
