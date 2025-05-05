export const mergeExchangeAndMarket = (exchanges = [], markets = []) => {
  return exchanges.map((exchange) => {
    const relatedMarkets = markets.filter(
      (market) => market.exchangeId === exchange.exchangeId
    );

    return {
      ...exchange,
      markets: relatedMarkets,
    };
  });
};
