import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../utils';

let CreateTodoForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
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
