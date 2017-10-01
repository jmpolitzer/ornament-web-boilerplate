import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { ReduxInputFormControl } from '../reduxFormControl';

let CreateTodoItemForm = props => {
  const { handleSubmit } = props;

  return (
    <Form inline onSubmit={ handleSubmit }>
      <FormGroup>
        <ControlLabel htmlFor="content">Content</ControlLabel>
        <Field name="content" type="text" component={ReduxInputFormControl} />
      </FormGroup>
      <Button type="submit">Add Todo</Button>
    </Form>
  )
}

CreateTodoItemForm = reduxForm({
  form: 'createTodoItem'
})(CreateTodoItemForm);

export default CreateTodoItemForm;
