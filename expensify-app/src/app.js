import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./styles/style.scss";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => <div>this is from the dashboard</div>;
const AddExpenseComponentPage = () => <div>this is add expense </div>;
const EditComponentPage = () => <div>this is edit expense </div>;
const HelpComponentPage = () => <div>this is help expense </div>;
const NotFoundPage = () => (
  <div>
    404 Page Not Found
    <Link to='/'> Home </Link>
  </div>
);
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName="is-active" exact={true}> Home </NavLink>
    <NavLink to='/create' activeClassName="is-active"> Create </NavLink>
    <NavLink to='/edit' activeClassName="is-active"> Edit </NavLink>
    <NavLink to='/help' activeClassName="is-active"> Help </NavLink>
  </header>
);
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
        <Route path='/create' component={AddExpenseComponentPage} />
        <Route path='/edit' component={EditComponentPage} />
        <Route path='/help' component={HelpComponentPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
