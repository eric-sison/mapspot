"use client";

import { FunctionComponent } from "react";
import { useMap, OpenLayerMap } from "../../../olm/openlayer-map";
import { useMapFocus } from "../../../olm/openlayer-map/hooks/use-map-focus";
import { getBasicMapLayers } from "../utils/layers";

export const BasicMap: FunctionComponent = () => {
  const { map, mapRef } = useMap();

  useMapFocus(map, mapRef);

  return (
    <OpenLayerMap
      center={[125.1726, 6.1135]}
      zoom={16}
      maxZoom={19}
      minZoom={4}
      projection={"EPSG:4326"}
      layers={getBasicMapLayers()}
      defaultInteractions
    />
  );
};