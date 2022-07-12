import { Value } from './validator-field';
declare type Fn = (value: Value) => string;
export interface RuleInstance {
    rule: (value: Value) => boolean;
    message: string | Fn;
}
export declare type ValidatorRules = RuleInstance[];
export declare const rules: {
    notEmpty: {
        rule: (value: any) => boolean;
        message: string;
    }[];
    bool: {
        rule: (value: any) => boolean;
        message: string;
    }[];
    password: {
        rule: (value: any) => boolean;
        message: string;
    }[];
    email: {
        rule: (value: any) => boolean;
        message: string;
    }[];
    min: (min: any) => {
        rule: (value: any) => boolean;
        message: string;
    }[];
    max: (max: any) => {
        rule: (value: any) => boolean;
        message: string;
    }[];
    length: (min: any, max?: any) => {
        rule: (value: any) => boolean;
        message: string;
    }[];
};
export {};
