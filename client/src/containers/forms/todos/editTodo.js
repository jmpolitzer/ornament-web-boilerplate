import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { ReduxInputFormControl } from '../reduxFormControl';

class EditTodoForm extends React.Component {
  constructor() {
    super();

    this.toggleEditTodoForm = this.toggleEditTodoForm.bind(this);
  }

  toggleEditTodoForm() {
    this.props.toggleEditTodoForm(this.props.todo.id);
  }

  render() {
    return <Form inline onSubmit={ this.props.handleSubmit }>
        <FormGroup>
          <ControlLabel htmlFor="title">Title</ControlLabel>
          <Field name="title" type="text" component={ReduxInputFormControl} />
        </FormGroup>
        <Button type="submit">Edit</Button>
        <Button bsStyle="danger" onClick={this.toggleEditTodoForm}>Cancel</Button>
      </Form>
  }
}

EditTodoForm = reduxForm({
  form: 'editTodo'
})(EditTodoForm);

export default EditTodoForm;
