import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';

let EditTodoItemForm = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <Field name="content"
               type="text"
               as={Form.Input}
               component={SemanticReduxFormField} />
      </Form.Group>
      <Button basic color='yellow' type="submit">Save</Button>
    </Form>
  )
}

EditTodoItemForm = reduxForm({
  form: 'EditTodoItemForm'
})(EditTodoItemForm);

export default EditTodoItemForm;
