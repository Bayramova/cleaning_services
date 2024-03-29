import React, { Component } from "react";
import { connect } from "react-redux";
import CostCalculationForm from "./CostCalculationForm";
import { handleFormChange } from "actions/updateFieldsState";

class CostCalculationFormContainer extends Component {
  render() {
    return (
      <CostCalculationForm
        services={this.props.services}
        onChange={this.props.onChange}
        selectCompany={this.props.selectCompany}
        matchPath={this.props.matchPath}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    orderFormFields: state.orderFormFields
  };
};

const mapDispatchToProps = {
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostCalculationFormContainer);
