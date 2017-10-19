import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../utils';

let CreateTodoForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Grid textAlign='center'>
        <Grid.Column width={2} />
        <Grid.Column width={12} stretched>
          <Form.Field>
            <Field name="title"
                   type="text"
                   as={Form.Input}
                   placeholder={'Create new list...'}
                   component={SemanticReduxFormField} />
          </Form.Field>
          <Form.Button color='teal' type="submit">Add New List</Form.Button>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
      {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
    </Form>
  )
}

CreateTodoForm = reduxForm({
  form: 'createTodoForm'
})(CreateTodoForm);

export default CreateTodoForm;
