"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorField = void 0;
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
        const field = new validator_1.Field({
            rules: this.props.rules,
            required: this.props.required,
            value: this.props.value,
            id: this.props.id
        });
        return field.validate();
    }
    render() {
        const { children, value } = this.props;
        const validity = this.validate();
        return (typeof children === 'function' ? children(validity, value) : children);
    }
}
function ValidatorField(props) {
    return (<context_1.Context.Consumer>
      {(data) => (<ValidationFieldWrapper {...props} registerField={data.registerField} unregisterField={data.unregisterField}/>)}
    </context_1.Context.Consumer>);
}
exports.ValidatorField = ValidatorField;
