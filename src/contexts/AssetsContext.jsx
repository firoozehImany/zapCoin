import { createContext, useContext, useEffect, useState } from "react";
import { getAllAssets, getAssetById } from "../services/assetService";

const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
  const [assets, setAssets] = useState([]);
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previousId, setPreviousId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllAssets();
        setAssets(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const fetchAssetById = async (id) => {
    if (id === previousId) return;
    setPreviousId(id);
    setLoading(true);
    try {
      const data = await getAssetById(id);
      setAsset(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AssetsContext.Provider
      value={{
        assets,
        asset,
        fetchAssetById,
        loading,
        error,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export const useAssets = () => useContext(AssetsContext);
