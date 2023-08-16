import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { OSMLayerOptions } from "../types/osm-layer-options";

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
