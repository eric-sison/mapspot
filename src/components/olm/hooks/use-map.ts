"use client";

import { useMapStore } from "./use-map-store";

/**
 * @returns current state of the `Map` object, as well as the `mapRef` that contains the map.
 */
export const useMap = () => useMapStore(({ map, mapRef }) => ({ map, mapRef }));
