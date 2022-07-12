"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorWrapper = void 0;
const react_1 = require("react");
const context_1 = require("./context");
const validator_1 = require("./validator");
class ValidatorWrapper extends react_1.Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.fields = [];
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
    validate() {
        const validator = new validator_1.Validator({ stopAtFirstError: this.props.stopAtFirstError });
        this.fields.forEach((comp) => {
            validator.addField(comp.props);
        });
        return validator.validate();
    }
    render() {
        return (<context_1.Context.Provider value={{ registerField: this.registerField, unregisterField: this.unregisterField }}>
        {this.props.children}
      </context_1.Context.Provider>);
    }
}
exports.ValidatorWrapper = ValidatorWrapper;
