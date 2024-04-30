import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore.js";
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
