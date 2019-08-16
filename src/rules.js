// eslint-disable-next-line
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  notEmpty: [{
    rule: (value) => value !== '' && value.length > 0,
    message: 'Value is required',
  }],


  bool: [{
    rule: (value) => !!value,
    message: 'Required value',
  }],


  password: [{
    rule: (value) => value.length > 0,
    message: 'Password field cannot be empty',
  }, {
    rule: (value) => value.length > 5,
    message: 'Password field can not be less than 6 characters',
  }],


  repeatPassword: (currentPassword) => [{
    rule: (value) => value.length > 0,
    message: 'Password field cannot be empty',
  }, {
    rule: (value) => value.length > 5,
    message: 'Password field can not be less than 6 characters',
  }, {
    rule: (value) => value === currentPassword,
    message: 'Passwords do not match',
  }],


  email: [{
    rule: (value) => value !== '' && value.length !== 0,
    message: 'Email is required',
  }, {
    rule: (value) => emailReg.test(String(value).toLowerCase()),
    message: 'Email is invalid',
  }],
};
