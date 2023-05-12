/**
 * @jest-environment jsdom
 */

import { unmountComponentAtNode } from 'react-dom'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useEffect, useState } from 'react'

import { rules } from './rules'
import { useValidator } from './use-validator'

let container
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

jest.useFakeTimers()

it('check state change and hide field', () => {
  function Comp() {
    const [value, setValue] = useState(false)
    const [isValid, validateObject] = useValidator(value, rules.bool)

    useEffect(() => {
      setTimeout(() => {
        act(() => {
          setValue(true)
        })
      }, 100)
    }, [])

    return (
      <>
        <span data-testid='test1'>{isValid ? 'true' : 'false'}</span>
        <span data-testid='test2'>{validateObject.message || 'true'}</span>
      </>
    )
  }
  act(() => {
    render(<Comp />)
  })

  expect(screen.getByTestId('test1').textContent).toContain('false')
  expect(screen.getByTestId('test2').textContent).toContain('Value is required')

  jest.runAllTimers()

  expect(screen.getByTestId('test1').textContent).toContain('true')
  expect(screen.getByTestId('test2').textContent).toContain('true')
})
