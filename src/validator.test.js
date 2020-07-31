/* eslint-env jest */

import Validator from './validator';
import { rules } from './index';

it('check normal create validator', () => {
  const validator = new Validator();
  expect(typeof validator).toBe('object');
  expect(typeof validator.validate).toBe('function');
});

it('check normal add and remove fileds', () => {
  const validator = new Validator({ stopAtFirstError: true });
  const fieldPassword = validator.addField({
    rules: rules.password,
    value: '',
    id: 'for-remove',
  });

  expect(typeof fieldPassword).toBe('object');

  const fieldSearchPassword = validator.getField('for-remove');

  expect(typeof fieldSearchPassword).toBe('object');
  expect(typeof fieldSearchPassword.validate).toBe('function');
  expect(fieldPassword === fieldSearchPassword).toBe(true);

  validator.removeField(fieldPassword);

  const newFieldSearchPassword = validator.getField('for-remove');
  expect(newFieldSearchPassword === null).toBe(true);
});
