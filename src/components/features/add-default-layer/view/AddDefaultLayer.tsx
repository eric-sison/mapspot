"use client";

import { useMap } from "@ericsison/mapspot/components/maps/olm";
import { useBingLayer } from "@ericsison/mapspot/hooks/use-bing-layer";
import { useOsmLayer } from "@ericsison/mapspot/hooks/use-osm-layer";
import { FunctionComponent } from "react";
import TileLayer from "ol/layer/Tile";
import { useMapStore } from "@ericsison/mapspot/components/maps/olm/hooks/use-map-store";

export const AddDefaultLayer: FunctionComponent = () => {
  const { map } = useMap();

  const setDefaultLayers = useMapStore((state) => state.setDefaultLayers);
  const defaultLayers = useMapStore((state) => state.defaultLayers);

  const osm = useOsmLayer({ visible: true });

  const bingMap = useBingLayer({
    visible: true,
    placeholderTiles: false,
  });

  const addDefaultLayer = (layer: TileLayer<any>) => {
    const newLayers = [...defaultLayers];
    newLayers.push(layer);
    setDefaultLayers(newLayers);
  };

  return (
    <div className="flex items-center gap-5">
      <button onClick={() => addDefaultLayer(osm)}>Add OSM</button>
      <button onClick={() => addDefaultLayer(bingMap)}>Add Bing</button>
    </div>
  );
};
