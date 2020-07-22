/* eslint-env jest */

import rules from './rules';

it('check rule email', () => {
  expect(rules.email.length).toBe(2);

  let result = null;
  // email.length > 0
  result = rules.email[0].rule('test');
  expect(result).toBe(true);

  // email check regexp
  result = rules.email[1].rule('test');
  expect(result).toBe(false);

  // email check regexp
  result = rules.email[1].rule('test@gmail.com');
  expect(result).toBe(true);
});

it('check rule password', () => {
  expect(rules.password.length).toBe(2);

  let result = null;
  // password.length > 0
  result = rules.password[0].rule('test');
  expect(result).toBe(true);

  // password.length > 5
  result = rules.password[1].rule('test');
  expect(result).toBe(false);
});

it('check rule bool', () => {
  expect(rules.bool.length).toBe(1);

  let result = null;
  result = rules.bool[0].rule(true);
  expect(result).toBe(true);
});

it('check rule notEmpty', () => {
  expect(rules.notEmpty.length).toBe(1);

  let result = null;
  result = rules.notEmpty[0].rule('');
  expect(result).toBe(false);

  result = rules.notEmpty[0].rule('test');
  expect(result).toBe(true);
});
