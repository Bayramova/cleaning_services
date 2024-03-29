import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { signUp, resend, deleteErrors } from "actions/userActions";
import { handleFormChange } from "actions/updateFieldsState";

class SignUpFormContainer extends Component {
  componentWillUnmount() {
    this.props.deleteErrors();
  }

  render() {
    return (
      <SignUpForm
        auth={this.props.auth}
        onChange={this.props.onChange}
        signUpUser={this.props.signUpUser}
        resendEmail={this.props.resendEmail}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  signUpUser: signUp,
  resendEmail: resend,
  onChange: handleFormChange,
  deleteErrors: deleteErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
