import { rules } from './rules'
import { Validator } from './validator'

it('check normal create validator', () => {
  const validator = new Validator()
  expect(typeof validator).toBe('object')
  expect(typeof validator.validate).toBe('function')
})

it('check normal add and remove fields', () => {
  const validator = new Validator({ stopAtFirstError: true })
  const fieldPassword = validator.addField({
    rules: rules.password,
    value: '',
    id: 'for-remove'
  })

  expect(typeof fieldPassword).toBe('object')

  const fieldSearchPassword = validator.getField('for-remove')

  expect(typeof fieldSearchPassword).toBe('object')
  expect(typeof fieldSearchPassword.validate).toBe('function')
  expect(fieldPassword.id === fieldSearchPassword.id).toBe(true)

  let newFieldSearchPassword = validator.getField('for-remove')
  validator.removeField(newFieldSearchPassword)
  newFieldSearchPassword = validator.getField('for-remove')
  expect(newFieldSearchPassword === null).toBe(true)
})
