import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Header, Container, Segment } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import { showFormErrors } from '../forms/utils';
import LoginForm from '../forms/auth/login';
import RegisterForm from '../forms/auth/register';
import { login, register } from '../../redux/auth/actions';

class Auth extends React.Component {
  constructor() {
    super();

    this.loginOrRegister = this.loginOrRegister.bind(this);
  }

  loginOrRegister() {
    const isRegister = this.props.location.pathname === '/register';
    const form = isRegister ? this.props.registerForm : this.props.loginForm;
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
      if(!isRegister) {
        this.props.login(form.values)
      } else {
        this.props.register(form.values)
      }
    }
  }

  render() {
    const isRegister = this.props.location.pathname === '/register';
    const currentForm = isRegister ? 'registerForm' : 'loginForm';
    const currentFormName = isRegister ? 'Register' : 'Login';

    return <Container text textAlign='center'>
      <Grid>
        <Grid.Column width={5}/>
        <Grid.Column width={6}>
          <Header
            as='h3'
            content={currentFormName}
            textAlign='center'>
          </Header>
          <Segment.Group>
            <Segment>
            {isRegister ?
              <RegisterForm onSubmit={this.loginOrRegister}
                formError={showFormErrors(this.props[currentForm]) ? this.props[currentForm].submitErrors : undefined} /> :
              <LoginForm onSubmit={this.loginOrRegister}
                formError={showFormErrors(this.props[currentForm]) ? this.props[currentForm].submitErrors : undefined} />}
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={5}/>
      </Grid>
    </Container>
  }
}

const mapStateToProps = state => {
  return {
    loginForm: state.form.loginForm,
    registerForm: state.form.registerForm
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  register
}, dispatch);

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
