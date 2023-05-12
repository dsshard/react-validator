import { ValidatorRules } from './rules';
import { Value } from './validator-field';
declare type Fn = (value: Value) => string;
export interface ValidatorRule {
    rule: (value: Value) => boolean;
    message: string | Fn;
}
export interface ErrorMessage {
    message: string;
    isValid: boolean;
}
export interface Validity {
    message: string;
    isValid: boolean;
    errors?: ErrorMessage[];
    id?: string | number;
}
export interface FieldParams {
    value: Value;
    rules: ValidatorRules;
    required?: boolean;
    id?: string | number;
}
export {};
