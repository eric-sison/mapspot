"use client";

import { FunctionComponent, MutableRefObject, ReactNode, useRef } from "react";
import { useMapInitializer } from "../hooks/useMapInitializer";
import { MapOptions } from "ol/Map";
import { ViewOptions } from "ol/View";

type OpenLayerMapProps = ViewOptions &
  Pick<
    MapOptions,
    "keyboardEventTarget" | "layers" | "maxTilesLoading" | "moveTolerance" | "pixelRatio" | "overlays"
  > & {
    children?: ReactNode | ReactNode[];
    defaultInteractions?: boolean;
    defaultControls?: boolean;
  };

export const OpenLayerMap: FunctionComponent<OpenLayerMapProps> = ({ children, ...mapOptions }) => {
  // initialize mapRef that will contain the map object, where it will be rendered.
  const mapRef = useRef() as unknown as MutableRefObject<HTMLDivElement>;

  // initialize the map
  useMapInitializer(mapOptions, mapRef);

  return (
    <div ref={mapRef} tabIndex={0} id="map" className="relative h-full w-full outline-none">
      {children}
    </div>
  );
};
