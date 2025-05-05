import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useExchanges } from "../contexts/ExchangesContext";

export const useSingleExchange = () => {
  const { id } = useParams();
  const { exchange, loading, error, fetchExchangeById } = useExchanges();

  useEffect(() => {
    fetchExchangeById(id);
  }, [id, fetchExchangeById]);

  return { exchange, loading, error };
};
