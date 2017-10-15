import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../utils';

let LoginForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Field>
        {(formError && formError['email']) && <FormError error={formError['email']} form={form} dispatch={dispatch} />}
        <Field name="email"
               type="text"
               as={Form.Input}
               placeholder={'email...'}
               component={SemanticReduxFormField} />
      </Form.Field>
      {(formError && formError['password']) && <FormError error={formError['password']} form={form} dispatch={dispatch} />}
      <Form.Field>
       <Field name="password"
              type="text"
              as={Form.Input}
              placeholder={'password...'}
              component={SemanticReduxFormField} />
      </Form.Field>
      <Button.Group>
        <Button basic color='teal' type="submit">Login</Button>
        <Button.Or />
        <Button color='teal' onClick={() => dispatch(push('/register'))}>Register</Button>
      </Button.Group>

    </Form>
  )
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default LoginForm;
