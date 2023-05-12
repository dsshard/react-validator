import { ValidatorRules } from './rules';
import { Value } from './validator-field';
import { Validity } from './types';
export declare function useValidator(value: Value, rules: ValidatorRules): [boolean, Pick<Validity, 'message' | 'errors'>];
