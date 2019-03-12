import React, { Component } from "react";
import serviceTypes from "./data/service_types.js";
import companies from "./data/companies";

const Context = React.createContext();

class Provider extends Component {
  state = {
    loadingData: true,
    serviceTypes: {},
    companies: [],
    orderFormFields: {
      address: {
        value: ""
      },
      serviceType: {
        value: ""
      },
      bigRooms: {
        value: ""
      },
      smallRooms: {
        value: ""
      },
      bathrooms: {
        value: ""
      },
      daysOfCleaning: {
        value: []
      },
      startTimeOfCleaning: {
        value: ""
      },
      cleaningFrequency: {
        value: ""
      },
      phone: {
        value: ""
      },
      prefix: {
        value: ""
      }
    }
  };

  componentDidMount() {
    this.setState(() => {
      return {
        serviceTypes,
        companies,
        loadingData: false
      };
    });
  }

  handleOrderFormChange = changedFields => {
    this.setState(({ orderFormFields }) => ({
      orderFormFields: { ...orderFormFields, ...changedFields }
    }));
  };

  handleSortValueChange = orderBy => {
    this.setState(({ companies }) => {
      const sortedCompaniesList = companies.sort(
        (company1, company2) => company2[orderBy] - company1[orderBy]
      );
      return {
        companies: sortedCompaniesList
      };
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleOrderFormChange: this.handleOrderFormChange,
          handleSortValueChange: this.handleSortValueChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
