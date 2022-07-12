import { Validity, Value } from './validator-field';
import { ValidatorRules } from './rules';
export interface FieldParams {
    value: Value;
    rules: ValidatorRules;
    required?: boolean;
    id?: string | number;
}
export declare class Field {
    private rules;
    private required;
    private value;
    id: string | number;
    constructor({ rules, required, value, id }: FieldParams);
    validate(): Validity;
}
export interface ValidatorParams {
    stopAtFirstError: boolean;
}
export declare class Validator {
    private fields;
    private params;
    constructor(params?: ValidatorParams);
    addField(params: FieldParams): Field;
    removeField(field: Field): void;
    getField(id: Field['id']): Field;
    validate(): Validity;
}
