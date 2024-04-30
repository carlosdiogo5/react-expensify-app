import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header.js";
import NotFoundPage from "../components/NotFoundPage.js";
import HelpPage from "../components/HelpPage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import AddExpensePage from "../components/AddExpensePage.js";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";

// create 6 new files for the 6 components
// setup imports, component, default export
// import into AppRouter so they can be used

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
