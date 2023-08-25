import { OSMLayerOptions } from "@ericsison/mapspot/types/osmLayerOptions";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export const useOsmLayer = (options: OSMLayerOptions) => {
  const {
    attributions,
    cacheSize,
    crossOrigin,
    interpolate,
    maxZoom,
    opaque,
    reprojectionErrorThreshold,
    tileLoadFunction,
    transition,
    url,
    wrapX,
    zDirection,
    ...rest
  } = options;

  return new TileLayer<OSM>({
    source: new OSM({
      attributions,
      cacheSize,
      crossOrigin,
      interpolate,
      maxZoom,
      opaque,
      reprojectionErrorThreshold,
      tileLoadFunction,
      transition,
      url,
      wrapX,
      zDirection,
    }),
    ...rest,
  });
};
