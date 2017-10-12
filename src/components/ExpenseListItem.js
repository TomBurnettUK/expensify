import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

numeral.locale('en-gb');

const ExpenseListItem = props => (
  <div>
    <h3>
      <Link to={`/edit/${props.id}`}>Description: {props.description}</Link>
    </h3>
    <p>Amount: {numeral(props.amount / 100).format('$0,0.00')}</p>
    <p>Created on {moment(props.createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default ExpenseListItem;
