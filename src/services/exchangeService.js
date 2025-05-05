import { exchangesApi } from "../utils/api";
import { marketsApi } from "../utils/api";

export const getAllExchanges = async () => {
  const response = await exchangesApi.get("/");
  console.log(response.data.data);
  return response.data.data;
};

export const getAllMarkets = async () => {
  const response = await marketsApi.get("/");
  console.log(response.data.data);
  return response.data.data;
};
