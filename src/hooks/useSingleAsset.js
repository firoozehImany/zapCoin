import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAssets } from "../contexts/AssetsContext";

export const useSingleAsset = () => {
  const { id } = useParams();
  const { asset, loading, error, fetchAssetById } = useAssets();
  useEffect(() => {
    fetchAssetById(id);
  }, [id, fetchAssetById]);
  return { asset, loading, error };
};
