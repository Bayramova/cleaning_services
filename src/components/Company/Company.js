import React, { Component } from "react";
import CostCalculationForm from "./CostForm/CostCalculationForm";
import CompanyServicesList from "./ServicesList/CompanyServicesList";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "./CompanyInfo.css";

class Company extends Component {
  render() {
    return (
      <div className="company-info__container">
        <div>
          <div>
            <h1 className="company-info__title">{this.props.company.name}</h1>
          </div>
          <div className="company-info__rating-and-orders">
            <div>
              <Rate disabled defaultValue={4} />
              <Link to={"/reviews"}>({this.props.company.reviewsNumber})</Link>
            </div>
            <span className="company-info__orders">{`${
              this.props.company.orders
            } orders`}</span>
          </div>
          <div className="company-info__address">
            <h3>{this.props.company.address}</h3>
          </div>
          <div className="company-info__card-container">
            <div className="company-info__card">
              <img
                className="company-info__logo"
                alt="logo"
                src={`.${this.props.company.logo}`}
              />
              <div className="company-info__buttons">
                <Link
                  to={`/uborkakvartir/reviews`}
                  className="company-info__button--feedback"
                >
                  Leave feedback
                </Link>

                <Link
                  to={{
                    pathname: "/make_order",
                    state: {
                      fromSelectedCompany: true
                    }
                  }}
                  className="company-info__button--order"
                >
                  Make order
                </Link>
              </div>
            </div>
          </div>
          <div className="company-info__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="services-list__title">Our Services</h2>
            <CompanyServicesList services={this.props.services} />
          </div>
          <div className="company-info__cost-form">
            <CostCalculationForm services={this.props.services} />
          </div>
        </div>
      </div>
    );
  }
}

export default Company;