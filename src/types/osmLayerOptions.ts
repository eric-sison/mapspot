import { Options as BaseTileOptions } from "ol/layer/BaseTile";
import OSM, { Options } from "ol/source/OSM";

export type OSMLayerOptions = Omit<BaseTileOptions<OSM>, "source"> & Options;
