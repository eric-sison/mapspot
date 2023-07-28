"use client";

import { MutableRefObject, useEffect } from "react";
import { Map } from "ol";

/**
 *
 * Receive focus as soon as the user hovers over the map object, once it is initialized.
 *
 * @param map The map object to be focused on.
 * @param mapRef The parent `div` that contains the map object.
 *
 */
export const useMapFocus = (map: Map | undefined, mapRef: MutableRefObject<HTMLDivElement> | undefined) => {
  useEffect(() => {
    // if current map instance is null
    if (map === undefined) return;

    // listen on pointer move event to set focus on the map
    map.on("pointermove", () => mapRef?.current.focus());

    return () => {
      // set map target to undefined
      map.setTarget(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
};
