import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
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
        {formError && <FormError error={formError} form={form} dispatch={dispatch} />}
        <Form.Group>
          <Field name="content"
                 type="text"
                 as={Form.Input}
                 component={SemanticReduxFormField} />
        </Form.Group>
        <Button basic color='blue' type="submit">Save</Button>
        <Button basic color='red' onClick={this.toggleEditTodoItemForm}>Cancel</Button>
      </Form>
    )
  }
}

EditTodoItemForm = reduxForm({
  form: 'EditTodoItemForm'
})(EditTodoItemForm);

export default EditTodoItemForm;
