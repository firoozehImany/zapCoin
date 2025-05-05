import { formatPercentage, formatLargeNumber } from "./numberUtils";

export const exchangeDataProcessor = (data) => {
  return data.map((item) => {
    const {
      name,
      rank,
      percentTotalVolume,
      volumeUsd,
      tradingPairs,
      exchangeId,
      exchangeUrl,
    } = item;
    return {
      key: exchangeId,
      id: exchangeId,
      rank: rank,
      name: name,
      exchangeId: exchangeId,
      exchangeUrl: exchangeUrl,
      tradingPairs: tradingPairs,
      volumeUsd: formatLargeNumber(volumeUsd),
      volumeUsdValue: Number(volumeUsd),
      percentTotalVolume: formatPercentage(percentTotalVolume),
      percentTotalVolumeValue: Number(percentTotalVolume),
    };
  });
};
