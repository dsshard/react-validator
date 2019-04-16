import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default class ValidatorWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
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

  getField = id => this.fields.find(field => field.props.id === id) || null

  validate = () => {
    const statuses = this.fields.map(field => field.validate());
    const errors = statuses.filter(instance => instance.isValid === false);
    if (errors.length) {
      return Object.assign(errors[0], {
        errors,
      });
    }
    return { isValid: true, message: '' };
  }

  render() {
    const { registerField } = this;
    const { children } = this.props;
    return (
      <Context.Provider value={{ registerField }}>
        {children}
      </Context.Provider>
    );
  }
}
