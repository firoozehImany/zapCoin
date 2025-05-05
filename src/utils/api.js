import axios from "axios";
import { getTokenDataFromLocalStorage } from "./localStorage";

const API_KEY =
  "2738db909a8515dd6a0398aee621ee7e2fbc66be0c9d198126f1a169264ae761";

const createApiInstance = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const assetsApi = createApiInstance("https://rest.coincap.io/v3/assets");
export const exchangesApi = createApiInstance(
  "https://rest.coincap.io/v3/exchanges"
);
export const marketsApi = createApiInstance(
  "https://rest.coincap.io/v3/markets"
);

export const addInterceptor = (apiInstance) => {
  apiInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error.response?.data.error);
      return Promise.reject(error);
    }
  );
};
addInterceptor(assetsApi);
addInterceptor(exchangesApi);

export const Api_URL = "https://moviesapi.codingfront.dev/api/v1";
export const api = axios.create({
  baseURL: Api_URL,
});

export const oauthApi = axios.create({
  baseURL: "https://moviesapi.codingfront.dev/",
});

oauthApi.interceptors.request.use(function (config) {
  config.headers["Authorization"] = `Bearer ${
    getTokenDataFromLocalStorage()?.access_token
  }`;
  return config;
});
