import moment from 'moment';

export default [
  {
    id: 'a',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: 'b',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: 'c',
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
