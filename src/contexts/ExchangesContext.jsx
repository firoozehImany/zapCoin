import { createContext, useContext, useEffect, useState } from "react";
import { getAllExchanges, getAllMarkets } from "../services/exchangeService";
const ExchangesContext = createContext();

export const ExchangesProvider = ({ children }) => {
  const [exchanges, setExchanges] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [exchange, setExchange] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const exchangeData = await getAllExchanges();
        setExchanges(exchangeData);
        setMarkets(await getAllMarkets());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const fetchExchangeById = (id) => {
    setLoading(true);
    setError(null);
    const foundExchange = exchanges.find((ex) => ex.exchangeId === id);
    if (foundExchange) {
      setExchange(foundExchange);
    } else {
      setError("Exchange not found");
    }
    setLoading(false);
  };

  return (
    <ExchangesContext.Provider
      value={{
        exchanges,
        markets,
        exchange,
        loading,
        error,
        fetchExchangeById,
      }}
    >
      {children}
    </ExchangesContext.Provider>
  );
};

export const useExchanges = () => useContext(ExchangesContext);
