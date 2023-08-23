import { Collection } from "ol";
import BaseLayer from "ol/layer/Base";
import Group from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import BingMaps from "ol/source/BingMaps";

export const setDefaultLayers = (): BaseLayer[] | Collection<BaseLayer> | Group => {
  return [
    new Group({
      layers: [
        new TileLayer({ source: new OSM(), visible: true, properties: ["osm"] }),
        new TileLayer({
          properties: ["bing"],
          source: new BingMaps({
            key: process.env.NEXT_PUBLIC_BING_KEY as string,
            imagerySet: "Aerial",
            placeholderTiles: false,
          }),
          visible: false,
        }),
      ],
    }),
  ];
};
