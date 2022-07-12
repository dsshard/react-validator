import { ValidatorRules } from './rules';
import { Validity, Value } from './validator-field';
export declare function useValidator(value: Value, rules: ValidatorRules): [boolean, Pick<Validity, 'message' | 'errors'>];
