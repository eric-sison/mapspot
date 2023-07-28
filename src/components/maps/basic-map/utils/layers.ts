import { Collection } from "ol";
import BaseLayer from "ol/layer/Base";
import Group from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export const getBasicMapLayers = (): BaseLayer[] | Collection<BaseLayer> | Group => {
  return [
    new Group({
      layers: [new TileLayer({ source: new OSM(), visible: true })],
    }),
  ];
};
