import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 10000,
    createdAt: 12345
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 5000,
    createdAt: 12346
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 50000,
    createdAt: 123
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

registerServiceWorker();
