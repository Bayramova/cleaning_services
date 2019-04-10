import {
  FETCH_SERVICES_REQUEST,
  FETCH_COMPANIES_REQUEST,
  FETCH_CLIENTS_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_COMPANIES_SUCCESS,
  FETCH_CLIENTS_SUCCESS,
  FETCH_DATA_FAILURE
} from "actions/receiveData";
import { SORT_COMPANIES } from "actions/sortCompanies";

const initialState = {
  loadingServices: true,
  loadingCompanies: true,
  loadingClients: true,
  services: [],
  companies: [],
  clients: [],
  error: null
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        loadingServices: true
      };
    case FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loadingCompanies: true
      };
    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        loadingClients: true
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        loadingServices: false,
        services: action.services,
        error: null
      };
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loadingCompanies: false,
        companies: action.companies,
        error: null
      };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loadingClients: false,
        clients: action.clients,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingData: false,
        error: action.message
      };
    case SORT_COMPANIES:
      const sortedCompaniesList = [...state.companies].sort(
        (company1, company2) =>
          company2[action.sortBy] - company1[action.sortBy]
      );
      return {
        ...state,
        companies: sortedCompaniesList
      };
    default:
      return state;
  }
}
