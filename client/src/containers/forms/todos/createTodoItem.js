import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';

let CreateTodoItemForm = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <label>Content</label>
        <Field name="content"
               type="text"
               as={Form.Input}
               placeholder='Add new todo...'
               component={SemanticReduxFormField} />
      </Form.Group>
      <Button basic color='blue' type="submit">Add Todo</Button>
    </Form>
  )
}

CreateTodoItemForm = reduxForm({
  form: 'createTodoItemForm'
})(CreateTodoItemForm);

export default CreateTodoItemForm;
