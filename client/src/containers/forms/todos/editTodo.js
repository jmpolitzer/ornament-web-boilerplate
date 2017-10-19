import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../../forms/utils';

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
      <Grid>
        <Grid.Column width={12}>
          <Form.Field>
            <Field name="title"
                   type="text"
                   as={Form.Input}
                   component={SemanticReduxFormField} />
          </Form.Field>
          {this.props.formError && <FormError error={this.props.formError} form={this.props.form} dispatch={this.props.dispatch} />}
        </Grid.Column>
        <Grid.Column width={4}>
          <Button icon='remove' floated='right' basic color='pink' onClick={this.toggleEditTodoForm}/>
          <Button icon='checkmark' floated='right' basic color='teal' type="submit"/>
        </Grid.Column>
      </Grid>
    </Form>
  }
}

EditTodoForm = reduxForm({
  form: 'editTodo'
})(EditTodoForm);

export default EditTodoForm;
