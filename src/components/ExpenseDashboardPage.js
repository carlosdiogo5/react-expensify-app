import React from "react";
import ExpenseList from "./ExpenseList.js";
import ExpenseListFilters from "./ExpenseListFilters.js";
import ExpensesSummary from "./ExpensesSummary.js";

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary></ExpensesSummary>
    <ExpenseListFilters></ExpenseListFilters>
    <ExpenseList></ExpenseList>
  </div>
);

export default ExpenseDashboardPage;