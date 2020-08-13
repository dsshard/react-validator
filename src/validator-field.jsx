/* eslint react/jsx-props-no-spreading: [0], react/sort-comp: [0], camelcase: [0] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import { Field } from './validator';

class ValidationFieldWrapper extends Component {
  componentWillUnmount() {
    this.props.unregisterField(this);
  }

  componentDidMount() {
    this.props.registerField(this);
  }

  validate = () => {
    const field = new Field({
      rules: this.props.rules,
      required: this.props.required,
      value: this.props.value,
      id: this.props.id,
    });
    return field.validate();
  }

  render() {
    const { children, value } = this.props;
    const validity = this.validate();
    return (typeof children === 'function' ? children(validity, value) : children);
  }
}

export default function ValidationField(props) {
  return (
    <Context.Consumer>
      {(data) => (
        <ValidationFieldWrapper
          {...props}
          registerField={data.registerField}
          unregisterField={data.unregisterField}
        />
      )}
    </Context.Consumer>
  );
}

ValidationFieldWrapper.propTypes = {
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

ValidationFieldWrapper.defaultProps = {
  rules: [],
  children: null,
  required: true,
  value: undefined,
  id: '',
};
