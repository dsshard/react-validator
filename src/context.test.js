/* eslint-env jest */

import context from './context';

it('renders with or without a name', () => {
  expect(typeof context).toBe('object');
  expect(typeof context.Consumer).toBe('object');
  expect(typeof context.Provider).toBe('object');
});
