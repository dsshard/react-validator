/* eslint react/jsx-props-no-spreading: [0], react/sort-comp: [0], camelcase: [0] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

class ValidationField extends Component {
  componentWillUnmount() {
    this.props.unregisterField(this);
  }

  componentDidMount() {
    this.props.registerField(this);
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
    return (typeof children === 'function' ? children(validity, value) : children);
  }
}

export default (props) => (
  <Context.Consumer>
    {(data) => (
      <ValidationField
        {...props}
        registerField={data.registerField}
        unregisterField={data.unregisterField}
      />
    )}
  </Context.Consumer>
);

ValidationField.propTypes = {
  // from context
  registerField: PropTypes.func.isRequired,
  unregisterField: PropTypes.func.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  rules: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    rule: PropTypes.func,
  })),

  id: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any, // eslint-disable-line
};

ValidationField.defaultProps = {
  rules: [],
  children: null,
  required: true,
  value: undefined,
  id: '',
};
