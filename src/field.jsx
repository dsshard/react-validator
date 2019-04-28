import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';


export default class ValidationVield extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]).isRequired,
    id: PropTypes.string,
    rules: PropTypes.arrayOf(PropTypes.shape({
      message: PropTypes.string,
      rule: PropTypes.func,
    })),
    required: PropTypes.bool,
    value: PropTypes.any.isRequired, // eslint-disable-line
  }

  static defaultProps = {
    rules: [],
    required: true,
    id: '',
  }

  validate = () => {
    let isValid = true;
    let message = '';
    const {
      rules,
      value,
      required,
      id,
    } = this.props;

    const isEmptyValue = !value && parseFloat(value) !== 0;

    if (!rules.length || (isEmptyValue && required === false)) {
      return { isValid, message, id };
    }

    rules.forEach((instance) => {
      if (isValid) {
        isValid = instance.rule(value);
        if (!isValid) {
          ({ message } = instance);
        }
      }
    });
    return { isValid, message, id };
  }

  render() {
    const { children, value } = this.props;
    const validity = this.validate();
    const isFunction = typeof children === 'function';
    return (
      <Context.Consumer>
        {(data) => {
          if (data.registerField) {
            data.registerField(this);
          }
          return (isFunction ? children(validity, value) : children);
        }}
      </Context.Consumer>
    );
  }
}
