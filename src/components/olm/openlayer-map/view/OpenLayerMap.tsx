"use client";

import { FunctionComponent, MutableRefObject, useRef } from "react";
import { OpenLayerMapProps } from "../utils/openlayer-map-props";
import { useMapInitializer } from "../hooks/use-map-initializer";

export const OpenLayerMap: FunctionComponent<OpenLayerMapProps> = ({ children, ...mapProps }) => {
  // initialize mapRef that will contain the map object, where it will be rendered.
  const mapRef = useRef() as unknown as MutableRefObject<HTMLDivElement>;

  // initialize the map
  useMapInitializer(mapProps, mapRef);

  return (
    <div ref={mapRef} tabIndex={0} id="map" className="relative h-full w-full outline-none">
      {children}
    </div>
  );
};
