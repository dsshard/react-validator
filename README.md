### React Validator

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/dsshard/react-validator/blob/master/LICENSE)
[![Travis CI](https://travis-ci.org/dsshard/react-validator.svg?branch=master)](https://travis-ci.org/dsshard/react-validator)
[![CodeCov](https://codecov.io/gh/dsshard/react-validator/branch/master/graph/badge.svg)](https://codecov.io/gh/dsshard/react-validator)
[![Coverage Status](https://coveralls.io/repos/github/dsshard/react-validator/badge.svg?branch=master)](https://coveralls.io/github/dsshard/react-validator?branch=master)
[![GitHub Release](https://img.shields.io/github/release/dsshard/react-validator.svg?style=flat)]()  


Simple react forms validation.

Need react **>=16.3**

## Example

``` javascript
import React, { useState } from 'react';
import ValidatorWrapper, { rules, ValidatorField } from '@coxy/react-validator';

const validator = React.createRef();

const handleSubmit = () => {
  const { isValid, message, errors } = validator.current.validate();
  if (!isValid) {
    console.log(isValid, message, errors);
    return;
  }
  // Success
};

export default () => {
  const [email, handleChange] = useState('');

  return (
    <ValidatorWrapper ref={validator}>

      <ValidatorField value={email} rules={rules.email}>
        {({ isValid, message }) => (
          <>
            <input value={email} onChange={({ target: { value } }) => handleChange(value)} />
            {!isValid && <div>{message}</div>}
          </>
        )}
      </ValidatorField>

      <ValidatorField value={email} rules={rules.email}>
        <input value={email} onChange={({ target: { value } }) => handleChange(value)} />
      </ValidatorField>

      {/* This is also possible :) */}
      <ValidatorField value={email} rules={rules.email} />

      <button onClick={handleSubmit} type="button">
        Submit
      </button>

    </ValidatorWrapper>
  );
};
```

### Rules

You can create your own rules for validation, with your own error messages


``` javascript
const rules = {
  email: [{
    rule: value => value !== '' && value.length > 0,
    message: 'Value is required',
  }, {
    rule: value => value.indexOf('@') > -1,
    message: '@ is required',
  }]
}
```

This component has a default set of rules that you can use right away:

| ****name**** | **Type** | **description**                                                         |
|--------------|----------|-------------------------------------------------------------------------|
| email        |          | Check email for empty string and regexp                                 |
| password     |          | Check password for empty string and length                              |
| notEmpty     |          | Check if the string is not empty                                        |
| boolean      |          | Will check that the value is present                                    |
| min          | function | min\(3\) \-> Check the number                                           |
| max          | function | max\(5\) \-> Check the number                                           |
| length       | function | length\(3, 5\) \-> Check string length \(second parameter is optional\) |



### Api

#### ValidatorWrapper

 **name**         | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------
 ref              | null        | no           | React\.ref or useRef                                   
 stopAtFirstError | false       | no           | The validator will stop checking after the first error       



#### ValidatorField

 ****name**** | ****default**** | ****required**** | **description**               
--------------|-----------------|------------------|-------------------------------
 value        | undefined       | yes              | Value for validation          
 rules        | \\\[\\\]        | yes              | Array of rules for validation 
 required     | true            | no               | The field will be required  


