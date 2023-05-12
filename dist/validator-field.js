"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const context_1 = require("./context");
const validator_1 = require("./validator");
class ValidationFieldWrapper extends react_1.Component {
    componentWillUnmount() {
        this.props.unregisterField(this);
    }
    componentDidMount() {
        this.props.registerField(this);
    }
    validate() {
        const props = this.props;
        const customError = props.customErrors.find((item) => item.id === props.id);
        if (customError) {
            return customError;
        }
        const field = new validator_1.Field({
            rules: props.rules,
            required: props.required,
            value: props.value,
            id: props.id,
        });
        return field.validate();
    }
    render() {
        const { children, value } = this.props;
        const validity = this.validate();
        return typeof children === 'function' ? children(validity, value) : children;
    }
}
function ValidatorField(props) {
    return ((0, jsx_runtime_1.jsx)(context_1.Context.Consumer, { children: (data) => ((0, jsx_runtime_1.jsx)(ValidationFieldWrapper, Object.assign({}, props, { customErrors: data.customErrors, registerField: data.registerField, unregisterField: data.unregisterField }))) }));
}
exports.ValidatorField = ValidatorField;
