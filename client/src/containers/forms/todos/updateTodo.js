import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { ReduxInputFormControl } from '../reduxFormControl';

let UpdateTodoForm = props => {
  const { handleSubmit } = props;

  return (
    <Form inline onSubmit={ handleSubmit }>
      <FormGroup>
        <ControlLabel htmlFor="title">Title</ControlLabel>
        <Field name="title" type="text" component={ReduxInputFormControl} />
      </FormGroup>
      <Button type="submit">Edit</Button>
      <Button bsStyle="danger">Delete</Button>
    </Form>
  )
}

UpdateTodoForm = reduxForm({
  form: 'updateTodo'
})(UpdateTodoForm);

export default UpdateTodoForm;
