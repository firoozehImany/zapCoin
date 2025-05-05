import { useState, useEffect } from "react";
import moment from "moment";
import { getAssetHistory } from "../services/assetService";

export const useAssetHistory = (id, interval = "d1") => {
  const [assetHistory, setAssetHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!id) return;

      setLoading(true);
      try {
        let apiInterval = interval;
        let start, end;

        if (["w1", "M1", "y1"].includes(interval)) {
          apiInterval = "d1";
          end = moment().valueOf();

          if (interval === "w1") {
            start = moment().subtract(7, "days").valueOf();
          } else if (interval === "M1") {
            start = moment().subtract(30, "days").valueOf();
          } else if (interval === "y1") {
            start = moment().subtract(1, "year").valueOf();
          }
        }

        const data = await getAssetHistory(id, apiInterval, { start, end });
        setAssetHistory(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [id, interval]);

  return { assetHistory, loading, error };
};
