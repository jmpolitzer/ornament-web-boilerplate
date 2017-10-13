import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../../forms/utils';

let EditTodoItemForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
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
