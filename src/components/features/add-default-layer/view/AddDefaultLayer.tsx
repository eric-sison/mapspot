"use client";

import { useBingLayer } from "@ericsison/mapspot/hooks/use-bing-layer";
import { useOsmLayer } from "@ericsison/mapspot/hooks/use-osm-layer";
import { FunctionComponent } from "react";
import { useLayer } from "@ericsison/mapspot/hooks/use-layer";

export const AddDefaultLayer: FunctionComponent = () => {
  const { addLayer } = useLayer();

  const osm = useOsmLayer({ visible: true });

  const bingMap = useBingLayer({
    visible: true,
    placeholderTiles: false,
  });

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => {
          addLayer(osm);
          console.log(osm);
        }}
      >
        Add OSM
      </button>
      <button
        onClick={() => {
          addLayer(bingMap);
          console.log(JSON.stringify(bingMap));
        }}
      >
        Add Bing
      </button>
    </div>
  );
};
