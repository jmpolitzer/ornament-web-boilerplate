import React from 'react';
import { FormControl } from 'react-bootstrap';

/*
https://github.com/react-bootstrap/react-bootstrap/issues/2210
https://react-bootstrap.github.io/components.html#forms

<FormControl> will work for <input>, <textarea>, and <select>.
Use <Checkbox> and <Radio> from checkboxes and radios respectively.
*/

export const ReduxInputFormControl = ({input, meta, ...props}) => {
  return <FormControl {...props} {...input} />;
}
