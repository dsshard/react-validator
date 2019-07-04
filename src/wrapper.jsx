import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default class ValidatorWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    stopAtFirstError: PropTypes.bool,
  }

  static defaultProps = {
    stopAtFirstError: false,
  }

  componentWillMount() {
    this.fields = [];
  }

  componentWillUnmount() {
    this.fields = [];
  }

  registerField = (field) => {
    if (field && !this.fields.includes(field)) {
      this.fields.push(field);
    }
  }

  unregisterField = (field) => {
    const index = this.fields.indexOf(field);
    if (field && index > -1) {
      this.fields.splice(index, 1);
    }
  }

  getField = id => this.fields.find(field => field.props.id === id) || null

  validate = () => {
    const { stopAtFirstError } = this.props;
    let prevResult;
    const statuses = this.fields.map((field) => {
      if (stopAtFirstError && prevResult && prevResult.isValid === false) {
        return null;
      }
      prevResult = field.validate();
      return prevResult;
    });

    const errors = statuses
      .filter(instance => instance)
      .filter(instance => instance.isValid === false);

    if (errors.length) {
      return Object.assign(errors[0], {
        errors,
      });
    }
    return { isValid: true, message: '' };
  }

  render() {
    const { registerField, unregisterField } = this;
    const { children } = this.props;
    return (
      <Context.Provider value={{ registerField, unregisterField }}>
        {children}
      </Context.Provider>
    );
  }
}
