import { Component, ReactNode, RefObject } from 'react';
interface ComponentProps {
    children?: ReactNode;
    stopAtFirstError?: boolean;
    ref?: RefObject<any>;
}
export declare class ValidatorWrapper extends Component<ComponentProps> {
    fields: any[];
    constructor(props: any, ctx: any);
    componentWillUnmount(): void;
    registerField(field: any): void;
    unregisterField(field: any): void;
    getField(id: any): any;
    validate(): import("./validator-field").Validity;
    render(): JSX.Element;
}
export {};
