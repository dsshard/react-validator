import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

class ValidationField extends Component {
  static propTypes = {
    // from context
    registerField: PropTypes.func.isRequired,
    unregisterField: PropTypes.func.isRequired,


    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
    id: PropTypes.string,
    rules: PropTypes.arrayOf(PropTypes.shape({
      message: PropTypes.string,
      rule: PropTypes.func,
    })),
    required: PropTypes.bool,
    value: PropTypes.any, // eslint-disable-line
  }

  static defaultProps = {
    rules: [],
    children: null,
    required: true,
    value: undefined,
    id: '',
  }

  componentWillMount() {
    const { registerField } = this.props;
    registerField(this);
  }

  componentWillUnmount() {
    const { unregisterField } = this.props;
    unregisterField(this);
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


export default props => (
  <Context.Consumer>
    {data => (
      <ValidationField
        {...props}
        registerField={data.registerField}
        unregisterField={data.unregisterField}
      />
    )}
  </Context.Consumer>
);
