import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

import './ExpenseListItem.css';

numeral.locale('en-gb');

const ExpenseListItem = props => (
  <Link className="list-item" to={`/edit/${props.id}`}>
    <div>
      <h3 className="list-item-title">{props.description}</h3>
      <p className="list-item-date">
        {moment(props.createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
    <h3 className="list-item-amount">
      {numeral(props.amount / 100).format('$0,0.00')}
    </h3>
  </Link>
);

export default ExpenseListItem;
