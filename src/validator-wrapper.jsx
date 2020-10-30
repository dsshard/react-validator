/* eslint react/sort-comp: [0], camelcase: [0] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import Validator from './validator';

class ValidatorWrapper extends Component {
  fields = [];

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
    if (index > -1) this.fields.splice(index, 1);
  }

  getField = (id) => this.fields.find((field) => field.props.id === id) || null

  validate = () => {
    const validator = new Validator({ stopAtFirstError: this.props.stopAtFirstError });
    this.fields.forEach((comp) => {
      validator.addField(comp.props);
    });
    return validator.validate();
  }

  render() {
    return (
      <Context.Provider
        value={{ registerField: this.registerField, unregisterField: this.unregisterField }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

ValidatorWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  stopAtFirstError: PropTypes.bool,
};

ValidatorWrapper.defaultProps = {
  stopAtFirstError: false,
};

export default ValidatorWrapper;
