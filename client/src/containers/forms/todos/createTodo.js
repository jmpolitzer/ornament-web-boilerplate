import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';

let CreateTodoForm = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <label>Title</label>
        <Field name="title"
               type="text"
               as={Form.Input}
               placeholder={'Create new list...'}
               component={SemanticReduxFormField} />
      </Form.Group>
      <Button basic color='blue' type="submit">Add New List</Button>
    </Form>
  )
}

CreateTodoForm = reduxForm({
  form: 'createTodoForm'
})(CreateTodoForm);

export default CreateTodoForm;
