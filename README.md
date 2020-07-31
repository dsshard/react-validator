### React Validator

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/dsshard/react-validator/blob/master/LICENSE)
[![Travis CI](https://travis-ci.org/dsshard/react-validator.svg?branch=master)](https://travis-ci.org/dsshard/react-validator)
[![CodeCov](https://codecov.io/gh/dsshard/react-validator/branch/master/graph/badge.svg)](https://codecov.io/gh/dsshard/react-validator)
[![Coverage Status](https://coveralls.io/repos/github/dsshard/react-validator/badge.svg?branch=master)](https://coveralls.io/github/dsshard/react-validator?branch=master)
[![dependencies Status](https://david-dm.org/dsshard/react-validator/status.svg)](https://david-dm.org/dsshard/react-validator)
[![Maintainability](https://api.codeclimate.com/v1/badges/a30e71d313f2d8bdd6b1/maintainability)](https://codeclimate.com/github/dsshard/react-validator/maintainability)
[![BundlePhobia](https://badgen.net/bundlephobia/minzip/@coxy/react-validator)](https://bundlephobia.com/result?p=@coxy/react-validator)
[![GitHub Release](https://img.shields.io/github/release/dsshard/react-validator.svg?style=flat)]()  


Simple react forms validation.

Need react **>=16.3**

# Example

See more examples [here](examples/example.jsx)

```jsx
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

See more examples [here](example/example.jsx)

# Rules

You can create your own rules for validation, with your own error messages


```javascript
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



# Api for React

#### ValidatorWrapper props

 **name**         | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------
 ref              | null        | no           | React\.ref or useRef                                   
 stopAtFirstError | false       | no           | The validator will stop checking after the first error       



#### ValidatorField props

 ****name**** | ****default**** | ****required**** | **description**               
--------------|-----------------|------------------|-------------------------------
 value        | undefined       | yes              | Value for validation          
 rules        | \[\]            | yes              | Array of rules for validation 
 required     | true            | no               | The field will be required  
 id           | null            | no               | ID for get field  


# Api for inline validation

#### Validator constructor parameters

 **name**         | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
 stopAtFirstError | false       | no           | The validator will stop checking after the first error       

#### Validator.addField()

Adds a field for validation

```javascript
import { Validator } from '@coxy/react-validator';

const validator = new Validator({ stopAtFirstError: true });
const field = validator.addField({
    rules: rules.password,
    value: '',
});
```

#### Validator.getField()

Returns the field by ID

```javascript
import { Validator } from '@coxy/react-validator';

const validator = new Validator({ stopAtFirstError: true });
const field = validator.addField({
    rules: rules.password,
    value: '',
    id: 'test-field-name'
});
console.log(validator.getField('test-field-name')) // Field Class
```

#### Validator.removeField()

Removes a previously added field


```javascript
import { Validator } from '@coxy/react-validator';

const validator = new Validator({ stopAtFirstError: true });
const field = validator.addField({
    rules: rules.password,
    value: '',
    id: 'test-field-name'
});

validator.removeField(field);
console.log(validator.getField('test-field-name')) // null
```


#### Validator.validate()

Validates all added fields

```javascript
import { Validator } from '@coxy/react-validator';

const validator = new Validator({ stopAtFirstError: true });
const field = validator.addField({
    rules: rules.password,
    value: '',
});

console.log(validator.validate());
```
