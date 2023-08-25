import { Map } from "ol";
import TileLayer from "ol/layer/Tile";
import { MutableRefObject } from "react";
import { create } from "zustand";

type MapStore = {
  map: Map | undefined;
  mapRef: MutableRefObject<HTMLDivElement> | undefined;
  defaultLayers: Array<TileLayer<any>>;
  setDefaultLayers: (layer: TileLayer<any>[]) => void;
  setMap: (map: Map, mapRef: MutableRefObject<HTMLDivElement>) => void;
  removeMap: () => void;
};

/**
 * Holds the value of the current `MapStore` state.
 *
 * @field
 * `map` is the current `Map` object. This value can be undefined, since the map may have not yet been initialized or may have been unmounted.
 *
 * @field
 * `mapRef` is the parent `div` that contains the map to be displayed in the `dom`.
 *
 * @function
 * `setMap()` mutates the values of `map` and `mapRef`. Used for creating a new instance of `Map` object.
 *
 * @function
 * `removeMap()` destroys the `Map` instance. Useful for clean up functions, especially when unmounting the map component.
 */
export const useMapStore = create<MapStore>((set) => ({
  map: undefined,
  mapRef: undefined,
  defaultLayers: [],
  setDefaultLayers: (defaultLayers) => set({ defaultLayers }),
  setMap: (map, mapRef) => set({ map, mapRef }),
  removeMap: () => set({ map: undefined }),
}));
