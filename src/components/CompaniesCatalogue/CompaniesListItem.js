import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import "./Catalogue.css";

const Company = props => {
  const { id, logo, name, address, rating } = props;
  return (
    <div className="company-card">
      <Link to={`/company/${id}`}>
        <img className="company-card__image" alt="logo" src={logo} />
        <div className="company-card__content">
          <div className="company-card__title">{name}</div>
          <div className="company-card__rate">
            <Rate disabled defaultValue={rating} />
          </div>
          <div className="company-card__description">{address}</div>
        </div>
      </Link>
    </div>
  );
};

export default Company;
