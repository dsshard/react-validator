import { Validator } from './validator'
import { ValidatorRules } from './rules'
import { Value } from './validator-field'
import { Validity } from './types'

export function useValidator(value: Value, rules: ValidatorRules): [boolean, Pick<Validity, 'message' | 'errors'>] {
  const validator = new Validator()
  validator.addField({ value, rules })
  const { isValid, ...validateObject } = validator.validate()
  return [isValid, validateObject]
}
