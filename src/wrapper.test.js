/* eslint-env jest */
/* globals shallow */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ValidatorWrapper from './wrapper';
import ValidatorField from './field';
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

it('render without child', () => {
  expect(() => shallow(<ValidatorWrapper />)).toThrowError();
});

it('check wrapper validator', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={[]} />
      </ValidatorWrapper>
    ), container);
  });

  expect(typeof validator.current).toBe('object');
  expect(typeof validator.current.validate).toBe('function');
});

it('check getField validator', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={[]} id="test" />
      </ValidatorWrapper>
    ), container);
  });

  expect(typeof validator.current.getField).toBe('function');
  const field = validator.current.getField('test');

  expect(typeof field.validate).toBe('function');
  const fieldValidate = field.validate();

  expect(fieldValidate.isValid).toBe(true);
  expect(fieldValidate.message).toBe('');
});

it('check getField undefined field', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={[]} id="test" />
      </ValidatorWrapper>
    ), container);
  });

  const field = validator.current.getField('8');
  expect(field).toBe(null);
});

it('check stopAtFirstError validator', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator} stopAtFirstError>
        <ValidatorField rules={[]} value="test" />
        <ValidatorField rules={rules.email} value="test" />
        <ValidatorField rules={rules.password} value="" />
      </ValidatorWrapper>
    ), container);
  });

  const fieldValidate = validator.current.validate();

  expect(fieldValidate.isValid).toBe(false);
  expect(fieldValidate.message).toBe('Email is invalid');
  expect(fieldValidate.errors.length).toBe(1);
});

it('check unregisterField, registerField', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={[]} />
      </ValidatorWrapper>
    ), container);
  });

  expect(typeof validator.current.registerField).toBe('function');
  expect(typeof validator.current.registerField(1)).toBe('undefined');

  expect(typeof validator.current.unregisterField).toBe('function');
  expect(typeof validator.current.unregisterField(1)).toBe('undefined');
});

it('check filed in field', () => {
  const validator = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validator}>
        <ValidatorField rules={[]}>
          <ValidatorField rules={[]} />
        </ValidatorField>
      </ValidatorWrapper>
    ), container);
  });

  expect(typeof validator.current).toBe('object');
  expect(typeof validator.current.validate).toBe('function');
  const result = validator.current.validate();
  expect(result.isValid).toBe(true);
});

it('check wrapper in wrapper', () => {
  const validatorOut = React.createRef();
  const validatorIn = React.createRef();
  act(() => {
    render((
      <ValidatorWrapper ref={validatorOut}>
        <ValidatorField rules={rules.email} value="" />
        <ValidatorWrapper ref={validatorIn}>
          <ValidatorField rules={rules.password} value="successpasswword" />
        </ValidatorWrapper>
      </ValidatorWrapper>
    ), container);
  });

  expect(validatorIn.current.validate().isValid).toBe(true);
  expect(validatorOut.current.validate().isValid).toBe(false);
});

it('check two validators', () => {
  const validatorSuccess = React.createRef();
  const validatorFailed = React.createRef();
  act(() => {
    render((
      <>
        <ValidatorWrapper ref={validatorSuccess}>
          <ValidatorField rules={rules.password} value="successpasswword" />
        </ValidatorWrapper>
        <ValidatorWrapper ref={validatorFailed}>
          <ValidatorField rules={rules.email} value="" />
        </ValidatorWrapper>
      </>
    ), container);
  });

  expect(typeof validatorFailed.current).toBe('object');
  expect(typeof validatorSuccess.current).toBe('object');

  expect(validatorFailed.current.validate().isValid).toBe(false);
  expect(validatorSuccess.current.validate().isValid).toBe(true);
});
