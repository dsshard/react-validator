import { ReactNode } from 'react';
import { Validity } from 'types';
import { ValidatorRules } from './rules';
export declare type Value = any;
declare type Fn = (validity: Validity, value: Value) => ReactNode;
interface Props {
    rules?: ValidatorRules;
    required?: boolean;
    value?: Value;
    id?: string | number;
    children?: ReactNode | Fn;
    unregisterField: (val: any) => void;
    registerField: (val: any) => void;
    customErrors: Array<Validity>;
}
export declare function ValidatorField(props: Omit<Props, 'registerField' | 'unregisterField' | 'customErrors'>): JSX.Element;
export {};
