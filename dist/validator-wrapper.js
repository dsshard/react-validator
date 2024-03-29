"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const context_1 = require("./context");
const validator_1 = require("./validator");
class ValidatorWrapper extends react_1.Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.fields = [];
        this.state = {
            customErrors: [],
        };
        this.registerField = this.registerField.bind(this);
        this.unregisterField = this.unregisterField.bind(this);
    }
    componentWillUnmount() {
        this.fields = [];
    }
    registerField(field) {
        if (field && !this.fields.includes(field)) {
            this.fields.push(field);
        }
    }
    unregisterField(field) {
        const index = this.fields.indexOf(field);
        if (index > -1)
            this.fields.splice(index, 1);
    }
    getField(id) {
        return this.fields.find((field) => field.props.id === id) || null;
    }
    setCustomError(customError) {
        this.setState({
            customErrors: [...this.state.customErrors, customError],
        });
    }
    clearCustomErrors() {
        this.setState({ customErrors: [] });
    }
    validate() {
        const validator = new validator_1.Validator({ stopAtFirstError: this.props.stopAtFirstError });
        this.fields.forEach((comp) => {
            validator.addField(comp.props);
        });
        return validator.validate();
    }
    render() {
        return ((0, jsx_runtime_1.jsx)(context_1.Context.Provider, Object.assign({ value: {
                customErrors: this.state.customErrors,
                registerField: this.registerField,
                unregisterField: this.unregisterField,
            } }, { children: this.props.children })));
    }
}
exports.ValidatorWrapper = ValidatorWrapper;
