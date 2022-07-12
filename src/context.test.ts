import { Context } from './context'

it('renders with or without a name', () => {
  expect(typeof Context).toBe('object')
  expect(typeof Context.Consumer).toBe('object')
  expect(typeof Context.Provider).toBe('object')
})
