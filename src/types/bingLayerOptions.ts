import { Options as BaseTileOptions } from "ol/layer/BaseTile";
import BingMaps, { Options } from "ol/source/BingMaps";

export type BingLayerOptions = Omit<BaseTileOptions<BingMaps>, "source"> &
  Omit<Options, "key" | "imagerySet" | "placeholderTiles"> & {
    placeholderTiles: boolean;
    imagerySet?:
      | "Aerial"
      | "AerialWithLabelsOnDemand"
      | "AerialWithLabelsOnDemand"
      | "Birdseye"
      | "BirdseyeWithLabels"
      | "BirdseyeV2"
      | "BirdseyeV2WithLabels"
      | "CanvasDark"
      | "CanvasLight"
      | "CanvasGray"
      | "OrdnanceSurvey"
      | "RoadOnDemand"
      | "Streetside";
  };
