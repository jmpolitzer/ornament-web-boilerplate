import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';

class EditTodoForm extends React.Component {
  constructor() {
    super();

    this.toggleEditTodoForm = this.toggleEditTodoForm.bind(this);
  }

  toggleEditTodoForm() {
    this.props.toggleEditTodoForm(this.props.todo.id);
  }

  render() {
    return <Form onSubmit={ this.props.handleSubmit }>
        <Form.Group>
          <label>Title</label>
          <Field name="title"
                 type="text"
                 as={Form.Input}
                 component={SemanticReduxFormField} />
        </Form.Group>
        <Button basic color='blue' type="submit">Save</Button>
        <Button basic color='red' onClick={this.toggleEditTodoForm}>Cancel</Button>
      </Form>
  }
}

EditTodoForm = reduxForm({
  form: 'editTodo'
})(EditTodoForm);

export default EditTodoForm;
