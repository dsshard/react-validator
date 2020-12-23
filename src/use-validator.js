import Validator from './validator';

export default function useValidate(value, rules) {
  const validator = new Validator();
  validator.addField({ value, rules });
  const { isValid, ...validateObject } = validator.validate();
  return [isValid, validateObject];
}
