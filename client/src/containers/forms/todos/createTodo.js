import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../utils';

let CreateTodoForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Grid>
        <Grid.Column width={13} stretched>
          <Form.Field>
            {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
            <Field name="title"
                   type="text"
                   as={Form.Input}
                   placeholder={'Create new list...'}
                   component={SemanticReduxFormField} />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={3} stretched>
          <Button icon='write' color='violet' type="submit" />
        </Grid.Column>
      </Grid>
    </Form>
  )
}

CreateTodoForm = reduxForm({
  form: 'createTodoForm'
})(CreateTodoForm);

export default CreateTodoForm;
