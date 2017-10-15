import { login, logout } from './auth';

it('should create login action', () => {
  const action = login('abc');
  expect(action).toEqual({ type: 'LOGIN', uid: 'abc' });
});

it('should create logout action', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});
