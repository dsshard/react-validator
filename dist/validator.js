"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = exports.Field = void 0;
class Field {
    constructor({ rules, required, value, id }) {
        this.rules = rules;
        this.required = required;
        this.value = value;
        this.id = id;
    }
    validate() {
        let isValid = true;
        let message = '';
        const { rules, value, required, id } = this;
        const isEmptyValue = !value && parseFloat(value) !== 0;
        if (!rules.length || (isEmptyValue && required === false)) {
            return { isValid, message, id };
        }
        rules.forEach((instance) => {
            if (isValid) {
                isValid = instance.rule(value);
                if (!isValid) {
                    if (typeof instance.message === 'function') {
                        message = instance.message(value);
                    }
                    else {
                        message = instance.message;
                    }
                }
            }
        });
        return { isValid, message, id };
    }
}
exports.Field = Field;
class Validator {
    constructor(params) {
        this.params = params || null;
        this.fields = [];
    }
    addField(params) {
        const field = new Field(params);
        this.fields.push(field);
        return field;
    }
    removeField(field) {
        const index = this.fields.indexOf(field);
        if (index > -1)
            this.fields.splice(index, 1);
    }
    getField(id) {
        return this.fields.find((field) => field.id === id) || null;
    }
    validate() {
        let prevResult;
        const statuses = this.fields.map((field) => {
            var _a;
            if (((_a = this.params) === null || _a === void 0 ? void 0 : _a.stopAtFirstError) && prevResult && prevResult.isValid === false) {
                return null;
            }
            prevResult = field.validate();
            return prevResult;
        });
        const errors = statuses.filter((inst) => inst && inst.isValid === false);
        if (errors.length) {
            const { isValid, message } = errors[0];
            return { isValid, message, errors };
        }
        return { isValid: true, message: '' };
    }
}
exports.Validator = Validator;
