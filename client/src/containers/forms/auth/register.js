import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../utils';

let RegisterForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Field>
        <Field name="email"
               type="text"
               as={Form.Input}
               placeholder={'email...'}
               component={SemanticReduxFormField} />
        {(formError && formError['email']) && <FormError error={formError['email']} form={form} dispatch={dispatch} />}
      </Form.Field>
      <Form.Field>
         <Field name="password"
                type="text"
                as={Form.Input}
                placeholder={'password...'}
                component={SemanticReduxFormField} />
         {(formError && formError['password']) && <FormError error={formError['password']} form={form} dispatch={dispatch} />}
      </Form.Field>
      <Button.Group>
        <Button basic color='teal' type="submit">Register</Button>
        <Button.Or />
        <Button color='teal' onClick={() => dispatch(push('/login'))}>Login</Button>
      </Button.Group>
    </Form>
  )
}

RegisterForm = reduxForm({
  form: 'registerForm'
})(RegisterForm);

export default RegisterForm;
