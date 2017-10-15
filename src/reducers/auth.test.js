import authReducer from './auth';

it('should set default state', () => {
  const state = authReducer(undefined, {});
  expect(state).toEqual({});
});

it('should set logged in state', () => {
  const state = authReducer(undefined, { type: 'LOGIN', uid: 'abc' });
  expect(state).toEqual({ uid: 'abc' });
});

it('should set logged out state', () => {
  const state = authReducer({ uid: 'abc' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
