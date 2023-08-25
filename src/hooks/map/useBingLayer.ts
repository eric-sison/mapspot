import TileLayer from "ol/layer/Tile";
import { BingLayerOptions } from "../../types/bingLayerOptions";
import BingMaps from "ol/source/BingMaps";

export const useBingLayer = (options: BingLayerOptions) => {
  const {
    cacheSize,
    culture,
    hidpi,
    imagerySet = "Aerial",
    interpolate,
    maxZoom,
    placeholderTiles,
    reprojectionErrorThreshold,
    tileLoadFunction,
    transition,
    wrapX,
    zDirection,
    ...rest
  } = options;

  return new TileLayer({
    source: new BingMaps({
      key: process.env.NEXT_PUBLIC_BING_KEY as string,
      cacheSize,
      culture,
      hidpi,
      imagerySet,
      placeholderTiles,
      reprojectionErrorThreshold,
      tileLoadFunction,
      transition,
      wrapX,
      zDirection,
    }),
    ...rest,
  });
};
