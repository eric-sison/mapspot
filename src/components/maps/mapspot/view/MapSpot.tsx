"use client";

import { FunctionComponent } from "react";
import { OpenLayerMap, useMap } from "../../olm";
import { LayerSwitcher } from "@ericsison/mapspot/components/controls/layer-switcher/views/LayerSwitcher";

export const MapSpot: FunctionComponent = () => {
  const { map, defaultLayers } = useMap();

  return (
    <OpenLayerMap
      center={[125.1726, 6.1135]}
      zoom={16}
      maxZoom={19}
      minZoom={4}
      projection={"EPSG:4326"}
      layers={defaultLayers}
      defaultInteractions
    >
      <div className="absolute z-10">
        <LayerSwitcher layers={map?.getAllLayers()} />
      </div>
    </OpenLayerMap>
  );
};
