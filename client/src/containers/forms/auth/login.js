import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import SemanticReduxFormField from '../semanticReduxFormField';
import { FormError } from '../utils';

let LoginForm = props => {
  const { handleSubmit, formError, form, dispatch } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        {(formError && formError['email']) && <FormError error={formError['email']} form={form} dispatch={dispatch} />}
        <Field name="email"
               type="text"
               as={Form.Input}
               placeholder={'email...'}
               component={SemanticReduxFormField} />
       {(formError && formError['password']) && <FormError error={formError['password']} form={form} dispatch={dispatch} />}
       <Field name="password"
              type="text"
              as={Form.Input}
              placeholder={'password...'}
              component={SemanticReduxFormField} />
      </Form.Group>
      <Button basic color='green' type="submit">Login</Button>
    </Form>
  )
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default LoginForm;
