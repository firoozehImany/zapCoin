import { assetsApi } from "../utils/api";

export const getAllAssets = async () => {
  const response = await assetsApi.get("/");
  return response.data.data;
};

export const getAssetById = async (id) => {
  const response = await assetsApi.get(`/${id}`);
  return response.data.data;
};

export const getAssetHistory = async (id, interval = "d1") => {
  const response = await assetsApi.get(`/${id}/history?interval=${interval}`);
  return response.data.data;
};

export const assetsIconUrl = (item) => {
  if (!item) return null;
  const iconUrl = `https://assets.coincap.io/assets/icons/${item.toLowerCase()}@2x.png`;
  return iconUrl;
};
