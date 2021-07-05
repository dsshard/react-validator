/**
 * @jest-environment jsdom
 */

/* eslint-env jest */
/* eslint react/jsx-filename-extension: [0] */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import rules from './rules';
import useValidate from './use-validator';

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

jest.useFakeTimers();

it('check state change and hide field', () => {
  function Comp() {
    const [value, setValue] = React.useState(false);
    const [isValid] = useValidate(value, rules.bool);
    console.log(isValid);

    React.useEffect(() => {
      setTimeout(() => {
        act(() => {
          setValue(true);
        });
      }, 100);
    }, []);

    return (
      <div>{isValid ? 'true' : 'false'}</div>
    );
  }
  act(() => {
    render(<Comp />, container);
  });

  expect(container.textContent).toBe('false');

  jest.runAllTimers();

  expect(container.textContent).toBe('true');
});
