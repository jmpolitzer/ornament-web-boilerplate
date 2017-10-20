import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../../forms/utils';

class EditTodoItemForm extends React.Component {
  constructor() {
    super();

    this.toggleEditTodoItemForm = this.toggleEditTodoItemForm.bind(this);
  }

  toggleEditTodoItemForm() {
    this.props.toggleEditTodoItemForm(this.props.item.id);
  }

  render() {
    const { handleSubmit, formError, form, dispatch } = this.props;

    return (
      <Form onSubmit={ handleSubmit }>
        <Grid>
          <Grid.Column width={12}>
            <Form.Field>
              <Field name="content"
                     type="text"
                     as={Form.Input}
                     component={SemanticReduxFormField} />
            </Form.Field>
            {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
          </Grid.Column>
          <Grid.Column width={4}>
            <Button icon='remove' floated='right' color='pink' onClick={this.toggleEditTodoItemForm}/>
            <Button icon='checkmark' floated='right' color='teal' type="submit"/>
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}

EditTodoItemForm = reduxForm({
  form: 'EditTodoItemForm'
})(EditTodoItemForm);

export default EditTodoItemForm;
