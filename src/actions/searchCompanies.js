import { fetchCompanies } from "utils/api/data";
import { fetchCompaniesRequest, fetchDataFailure } from "./receiveData";

export const CLEAR_COMPANIES = "CLEAR_COMPANIES";
export const SEARCH_COMPANIES_SUCCESS = "SEARCH_COMPANIES_SUCCESS";

const searchCompaniesSuccess = (companies, hasMore) => {
  return {
    type: SEARCH_COMPANIES_SUCCESS,
    companies,
    hasMore
  };
};

const clearCompaniesList = () => {
  return {
    type: CLEAR_COMPANIES
  };
};

export const clearCompanies = () => dispatch => {
  dispatch(clearCompaniesList());
};

export const searchCompanies = (query, page, limit) => dispatch => {
  dispatch(fetchCompaniesRequest());

  fetchCompanies(page, limit, query)
    .then(res => {
      dispatch(searchCompaniesSuccess(res.companies, res.hasMore));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
