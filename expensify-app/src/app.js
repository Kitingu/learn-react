import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import "./styles/style.scss";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => <div>this is from the dashboard</div>;
const AddExpenseComponentPage = () => <div>this is add expense </div>;
const EditComponentPage = () => <div>this is edit expense </div>;
const HelpComponentPage = () => <div>this is help expense </div>;
const NotFoundPage = () => <div>404 Page Not Found </div>;
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpenseComponentPage} />
      <Route path='/edit' component={EditComponentPage} />
      <Route path='/help' component={HelpComponentPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
