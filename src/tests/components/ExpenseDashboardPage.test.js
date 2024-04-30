import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage.js";
import ExpenseList from "../../components/ExpenseList.js";
import ExpenseListFilters from "../../components/ExpenseListFilters";

test('Should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>);
  expect(wrapper).toMatchSnapshot();
});