import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm.js";
import { editExpense, removeExpense } from "../actions/expenses.js";

// Refactor EditExpensePage to be a class based component
// Setup mapDispatchToProps editExpense and removeExpense

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  
  onRemove = (expense) => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);