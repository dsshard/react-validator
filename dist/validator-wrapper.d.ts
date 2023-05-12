import { Component, ReactNode, RefObject } from 'react';
import { Validity } from './types';
import { Field } from './validator';
interface ComponentProps {
    children?: ReactNode;
    stopAtFirstError?: boolean;
    ref?: RefObject<any>;
}
export declare class ValidatorWrapper extends Component<ComponentProps> {
    fields: any[];
    state: {
        customErrors: any[];
    };
    constructor(props: any, ctx: any);
    componentWillUnmount(): void;
    registerField(field: any): void;
    unregisterField(field: any): void;
    getField(id: any): Field | null;
    setCustomError(customError: Validity): void;
    clearCustomErrors(): void;
    validate(): Validity;
    render(): JSX.Element;
}
export {};
