import { ReactNode } from 'react';
import { ValidatorRules } from './rules';
export declare type Value = any;
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
declare type Fn = (validity: Validity, value: Value) => ReactNode;
interface Props {
    rules?: ValidatorRules;
    required?: boolean;
    value?: Value;
    id?: string | number;
    children?: ReactNode | Fn;
    unregisterField: (val: any) => void;
    registerField: (val: any) => void;
}
export declare function ValidatorField(props: Omit<Props, 'registerField' | 'unregisterField'>): JSX.Element;
export {};
