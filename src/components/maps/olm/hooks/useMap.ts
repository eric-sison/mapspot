"use client";

import { useMapStore } from "./useMapStore";

/**
 * @returns current state of the `Map` object, as well as the `mapRef` that contains the map.
 */
export const useMap = () => useMapStore(({ map, mapRef, defaultLayers }) => ({ map, mapRef, defaultLayers }));
