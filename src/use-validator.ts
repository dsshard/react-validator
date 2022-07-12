import { Validator } from './validator'
import { ValidatorRules } from './rules'
import { Validity, Value } from './validator-field'

export function useValidator (value: Value, rules: ValidatorRules): [boolean, Pick<Validity, 'message' | 'errors'>] {
  const validator = new Validator()
  validator.addField({ value, rules })
  const { isValid, ...validateObject } = validator.validate()
  return [isValid, validateObject]
}
