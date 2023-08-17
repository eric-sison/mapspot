import TileLayer from "ol/layer/Tile";
import { useMapStore } from "../components/maps/olm/hooks/use-map-store";

export const useLayer = () => {
  // current value of defaultLayers
  const defaultLayers = useMapStore((state) => state.defaultLayers);

  // updater function to update the state of defaultLayers
  const setDefaultLayers = useMapStore((state) => state.setDefaultLayers);

  /**
   * Pushes a new tile layer into the `defaultLayers` global store, from which the map will base its default layers to render.
   *
   * @param layer The TileLayer to be added into the map
   */
  const addLayer = (layer: TileLayer<any>) => {
    // create a temporary variable that will hold the current value of defaultLayers
    let newLayers: TileLayer<any>[] | null = [...defaultLayers];

    // push the new layer into the array
    newLayers.push(layer);

    // update the state from the store
    setDefaultLayers(newLayers);

    // remove memory allocation of temporary variable
    newLayers = null;
  };

  return { addLayer };
};
