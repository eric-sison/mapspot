"use client";

import { MutableRefObject, useEffect } from "react";
import { OpenLayerMapProps } from "../utils/openlayer-map-props";
import { useMapStore } from "./useMapStore";
import { Map } from "ol";
import View from "ol/View";

/**
 *
 * Initializes a new instance of a `Map` object.
 *
 * @param mapRef The parent `div` that will contain the map object to be rendered.
 *
 * @param mapOptions The options to be passed to initialize a new `Map` object.
 *
 * @link To learn more about the `Map` object, please visit: https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html
 */
export const useMapInitializer = (
  mapOptions: Omit<OpenLayerMapProps, "children">,
  mapRef: MutableRefObject<HTMLDivElement>,
) => {
  // access setMap and removeMap functions from the global store
  const { setMap, removeMap } = useMapStore((state) => state);

  // deconstruct mapOptions object to set default values, and separate the viewOptions to be passed in the new View instance.
  const {
    defaultControls = false,
    defaultInteractions = false,
    keyboardEventTarget,
    maxTilesLoading,
    moveTolerance,
    pixelRatio,
    layers = [],
    overlays,
    ...viewOptions
  } = mapOptions;

  useEffect(() => {
    /**
     * Initialize a new map instance
     */
    const initialMap = new Map({
      /**
       * Creates a new instance of View object.
       * A View object represents a simple 2D view of the map.
       * This is the object to act upon to change the center, resolution, and rotation of the map.
       */
      view: new View(viewOptions),

      /**
       * Set the target element to render this map into.
       * In this case, the mapRef will contain the map object from which it will be rendered in the browser.
       */
      target: mapRef.current,

      /**
       * Check the value of defaultControls from the props passed in initializing the map component.
       * If the value is set to false, controls will hold an empty array, signifying that you can create your own custom control.
       */
      controls: !defaultControls ? [] : undefined,

      /**
       * Check the value of defaultInteractions from the props passed in initializing the map component.
       * If the value is set to false, interactions will hold an ampty array, signifying that you can create yuor own custom interactions.
       */
      interactions: !defaultInteractions ? [] : undefined,

      /**
       * A Collection of layers that are handled together.
       * If not set, layers will contain an empty array as its default value.
       */
      layers,

      /**
       * The element to listen to keyboard events on. This determines when the KeyboardPan and KeyboardZoom interactions trigger.
       * If this option is not specified, the element the library listens to keyboard events on is the map target.
       */
      keyboardEventTarget,

      /**
       * Maximum number of tiles to load simultaneously.
       */
      maxTilesLoading,

      /**
       * The minimum distance in pixels the cursor must move to be detected as a map move event instead of a click.
       * Increasing this value can make it easier to click on the map.
       */
      moveTolerance,

      /**
       * The ratio between physical pixels and device-independent pixels (dips) on the device.
       */
      pixelRatio,

      /**
       * Overlays initially added to the map. By default, no overlays are added.
       */
      overlays,
    });

    // as soon as the map has been initialized and rendered, capture the focus to make the map interactible
    initialMap.once("postrender", () => mapRef.current.focus());

    // set the new map instance by mutating the state from the global store.
    setMap(initialMap, mapRef);

    return () => {
      // do nothing if initialMap is undefined
      if (initialMap === undefined) return;

      // unset the map target, which is the mapRef
      initialMap.setTarget(undefined);

      // set the value of map to undefined
      removeMap();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
