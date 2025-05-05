export const marketDataProcessor = (data) => {
  return data.map((item) => {
    const { exchangeId, baseSymbol, quoteSymbol } = item;
    return {
      exchangeId: exchangeId,
      topPair: baseSymbol / quoteSymbol,
    };
  });
};
