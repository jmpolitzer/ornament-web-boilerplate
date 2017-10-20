import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../../forms/utils';

let CreateTodoItemForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form style={{ marginBottom: '1em' }} onSubmit={ handleSubmit }>
      <Grid>
        <Grid.Column width={12}>
          <Form.Field>
            {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
            <Field name="content"
                   type="text"
                   as={Form.Input}
                   placeholder='Add new todo...'
                   component={SemanticReduxFormField} />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button floated='right' icon='write' basic color='violet' type="submit"/>
        </Grid.Column>
      </Grid>
    </Form>
  )
}

CreateTodoItemForm = reduxForm({
  form: 'createTodoItemForm'
})(CreateTodoItemForm);

export default CreateTodoItemForm;
