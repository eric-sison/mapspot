import { MapOptions } from "ol/Map";
import { ViewOptions } from "ol/View";
import { ReactNode } from "react";

export type OpenLayerMapProps = ViewOptions &
  Pick<
    MapOptions,
    "keyboardEventTarget" | "layers" | "maxTilesLoading" | "moveTolerance" | "pixelRatio" | "overlays"
  > & {
    children?: ReactNode | ReactNode[];
    defaultInteractions?: boolean;
    defaultControls?: boolean;
  };
