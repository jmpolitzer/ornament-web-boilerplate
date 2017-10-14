import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Container, Segment, Button } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import { showFormErrors } from '../forms/utils';
import LoginForm from '../forms/auth/login';
import RegisterForm from '../forms/auth/register';
import { login, register, toggleRegisterForm } from '../../redux/auth/actions';

class Auth extends React.Component {
  constructor() {
    super();

    this.loginOrRegister = this.loginOrRegister.bind(this);
    this.toggleRegisterForm = this.toggleRegisterForm.bind(this);
  }

  loginOrRegister() {
    const form = this.props.showRegisterForm ? this.props.registerForm : this.props.loginForm;
    const fields = Object.keys(form.registeredFields);
    let errors = {};

    if(!form.values) {
      fields.forEach((field) => {
        errors[field] = 'Required';
      });
    } else {
      fields.forEach((field) => {
        if(!form.values[field]) {
          errors[field] = 'Required';
        }
      });
    }

    if(Object.keys(errors).length) {
      throw new SubmissionError(errors);
    } else {
      if(!this.props.showRegisterForm) {
        this.props.login(form.values)
      } else {
        this.props.register(form.values)
      }
    }
  }

  toggleRegisterForm() {
    this.props.toggleRegisterForm();
  }

  render() {
    const currentForm = this.props.showRegisterForm ? 'registerForm' : 'loginForm';
    const currentFormName = this.props.showRegisterForm ? 'Register' : 'Login';
    const oppositeFormName = this.props.showRegisterForm ? 'Login' : 'Register';

    return <div>
      <Header
        as='h3'
        content={currentFormName}
        textAlign='center'>
      </Header>
      <Container text>
        <Segment.Group>
          <Segment>
            {this.props.showRegisterForm ?
            <RegisterForm onSubmit={this.loginOrRegister}
                          formError={showFormErrors(this.props[currentForm]) ? this.props[currentForm].submitErrors : undefined} /> :
            <LoginForm onSubmit={this.loginOrRegister}
                       formError={showFormErrors(this.props[currentForm]) ? this.props[currentForm].submitErrors : undefined} />}
          </Segment>
        </Segment.Group>
        <Button basic color='teal' onClick={this.toggleRegisterForm}>{oppositeFormName}</Button>
      </Container>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    loginForm: state.form.loginForm,
    registerForm: state.form.registerForm,
    showRegisterForm: state.auth.showRegisterForm
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  register,
  toggleRegisterForm
}, dispatch);

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
