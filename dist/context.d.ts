/// <reference types="react" />
import { Validity } from './types';
export declare const Context: import("react").Context<{
    registerField: (field: string | number) => void;
    unregisterField: (field: string | number) => void;
    customErrors: Array<Validity>;
}>;
