import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Container, Segment } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import { showFormErrors } from '../forms/utils';
import LoginForm from '../forms/auth/login';
import { login } from '../../redux/auth/actions';

class Auth extends React.Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
  }

  login() {
    const form = this.props.loginForm;
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
      this.props.login(form.values)
    }
  }

  render() {
    return <div>
      <Header
        as='h3'
        content='Login'
        textAlign='center'>
      </Header>
      <Container text>
        <Segment.Group>
          <Segment>
            <LoginForm onSubmit={this.login}
                       formError={showFormErrors(this.props.loginForm) ? this.props.loginForm.submitErrors : undefined} />
          </Segment>
        </Segment.Group>
      </Container>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    loginForm: state.form.loginForm
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
