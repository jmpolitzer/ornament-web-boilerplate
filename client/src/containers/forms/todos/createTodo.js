import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { ReduxInputFormControl } from '../reduxFormControl';

let CreateTodoForm = props => {
  const { handleSubmit } = props;

  return (
    <Form inline onSubmit={ handleSubmit }>
      <FormGroup>
        <ControlLabel htmlFor="title">Title</ControlLabel>
        <Field name="title" type="text" component={ReduxInputFormControl} />
      </FormGroup>
      <Button type="submit">Add Todo List</Button>
    </Form>
  )
}

CreateTodoForm = reduxForm({
  form: 'createTodo'
})(CreateTodoForm);

export default CreateTodoForm;
