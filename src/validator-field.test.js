/* eslint-env jest */
/* globals shallow */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ValidatorWrapper from './validator-wrapper';
import ValidatorField from './validator-field';
import rules from './rules';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render without wrapper', () => {
  expect(() => shallow(<ValidatorField />)).toThrowError();
});

it('normal render', () => {
  act(() => {
    render((
      <ValidatorWrapper>
        <ValidatorField rules={[]} value="" />
      </ValidatorWrapper>
    ), container);
  });
});

it('check context validator', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={[]} />
      </ValidatorWrapper>
    ), container);
  });

  const validateResult = validator.current.validate();

  expect(validateResult.isValid).toBe(true);
  expect(validateResult.message).toBe('');
});

it('check failed validation', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={rules.email} value="test" />
      </ValidatorWrapper>
    ), container);
  });

  const validateResult = validator.current.validate();

  expect(validateResult.isValid).toBe(false);
  expect(validateResult.message).toBe('Email is invalid');
  expect(validateResult.errors.length).toBe(1);
});

it('check success validation', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={rules.email} value="email@email.com" />
      </ValidatorWrapper>
    ), container);
  });

  const validateResult = validator.current.validate();

  expect(validateResult.isValid).toBe(true);
  expect(validateResult.message).toBe('');
});

it('check success validation fot child function', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={rules.email} value="email@email.com">
          {({ isValid, message }) => (
            <>
              {!isValid && <div>{message}</div>}
            </>
          )}
        </ValidatorField>
      </ValidatorWrapper>
    ), container);
  });

  const validateResult = validator.current.validate();

  expect(validateResult.isValid).toBe(true);
  expect(validateResult.message).toBe('');
});
