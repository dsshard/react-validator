### React Validator

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![Travis CI](https://travis-ci.org/dsshard/react-validator.svg?branch=master)](https://travis-ci.org/tterb/yt2mp3)
[![CodeCov](https://codecov.io/gh/dsshard/react-validator/branch/master/graph/badge.svg)](https://codecov.io/gh/tterb/yt2mp3)
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

      <button onClick={handleSubmit} type="button">
        Submit
      </button>

    </ValidatorWrapper>
  );
};
```

### Rules

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

Default rules:
- email
- notEmpty


### Api

#### ValidatorWrapper

**props:**
- ref
- stopAtFirstError


#### ValidatorField

**props:**
- value
- rules
- required (default: true)
