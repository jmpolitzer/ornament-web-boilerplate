import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { ReduxInputFormControl } from '../reduxFormControl';

let EditTodoItemForm = props => {
  const { handleSubmit } = props;

  return (
    <Form inline onSubmit={ handleSubmit }>
      <FormGroup>
        <Field name="content" type="text" component={ReduxInputFormControl} />
      </FormGroup>
      <Button type="submit">Save</Button>
    </Form>
  )
}

EditTodoItemForm = reduxForm({
  form: 'EditTodoItemForm'
})(EditTodoItemForm);

export default EditTodoItemForm;
