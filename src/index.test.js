/* eslint-env jest */

import ValidatorWrapper, { ValidatorField, rules } from './index';

it('renders with or without a name', () => {
  expect(typeof ValidatorWrapper).toBe('function');
  expect(typeof ValidatorField).toBe('function');
  expect(typeof rules).toBe('object');
});
