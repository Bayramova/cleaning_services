import React, { Component } from "react";
import { connect } from "react-redux";
import FeedbackForm from "./FeedbackForm";
import { handleFormChange } from "actions/updateFieldsState";
import { leaveFeedback } from "actions/userActions";

class FeedbackFormContainer extends Component {
  render() {
    return (
      <FeedbackForm
        onChange={this.props.onChange}
        leaveFeedback={this.props.leaveFeedback}
        orderId={this.props.location.state.orderId}
        company={this.props.location.state.companyName}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    orderFormFields: state.orderFormFields,
    auth: state.auth,
    companies: state.companiesDataData,
    services: state.servicesData
  };
};

const mapDispatchToProps = {
  onChange: handleFormChange,
  leaveFeedback
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackFormContainer);
