import { assetsIconUrl } from "../services/assetService";
import {
  formatCurrency,
  formatPercentage,
  formatLargeNumber,
} from "./numberUtils";

export const assetsDataProcessor = (data) => {
  return data.map((item) => {
    const {
      id,
      symbol,
      name,
      supply,
      marketCapUsd,
      volumeUsd24Hr,
      priceUsd,
      changePercent24Hr,
    } = item;
    return {
      key: id,
      alt: id,
      id: id,
      name: name,
      symbol: symbol,
      iconUrl: assetsIconUrl(symbol),
      noIconUrl: "/assets/images/noIcon.svg",
      price: formatCurrency(priceUsd),
      priceValue: Number(priceUsd),
      change: formatPercentage(changePercent24Hr),
      changeValue: Number(changePercent24Hr),
      volumeUsd24H: formatLargeNumber(volumeUsd24Hr),
      volumeUsd24HValue: Number(volumeUsd24Hr),
      marketCap: formatLargeNumber(marketCapUsd),
      marketCapValue: Number(marketCapUsd),
      supply: formatLargeNumber(supply),
      supplyValue: Number(supply),
    };
  });
};
