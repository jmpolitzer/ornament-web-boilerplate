import React from 'react';
import { clearSubmitErrors } from 'redux-form';
import { Icon } from 'semantic-ui-react';

export class FormError extends React.Component {
  constructor() {
    super();

    this.clearFormError = this.clearFormError.bind(this);
  }

  clearFormError() {
    this.props.dispatch(clearSubmitErrors(this.props.form));
  }

  render() {
    return (
      <div style={{ color:'red', textAlign:'left' }}>
        <Icon link name='close' onClick={this.clearFormError} />
        <span>{this.props.error}</span>
      </div>
    );
  }
}

export function showFormErrors(form) {
  if(form) {
    if(form.submitErrors) {
      return true;
    }
  }

  return false;
}
