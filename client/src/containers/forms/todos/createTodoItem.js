import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../../forms/utils';

let CreateTodoItemForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;
  console.log(props);
  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
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
