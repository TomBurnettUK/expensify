import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = props => (
  <div>
    <h3>
      <Link to={`/edit/${props.id}`}>Description: {props.description}</Link>
    </h3>
    <p>Amount: {props.amount}</p>
    <p>Created At: {props.createdAt}</p>
  </div>
);

export default ExpenseListItem;
