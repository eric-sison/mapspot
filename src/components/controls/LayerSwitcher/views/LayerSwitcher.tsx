"use client";

import Layer from "ol/layer/Layer";
import LayerRenderer from "ol/renderer/Layer";
import Source from "ol/source/Source";
import { FunctionComponent } from "react";

type LayerSwitcherProps = {
  layers: Layer<Source, LayerRenderer<any>>[] | undefined;
};

export const LayerSwitcher: FunctionComponent<LayerSwitcherProps> = ({ layers }) => {
  const swicthLayer = (index: number) => {
    layers?.forEach((layer, currIndex) => layer.setVisible(index === currIndex));
  };

  // console.log(layers?.forEach((layer) => layer.));

  return (
    <div className="">
      {/* <ul>{layers?.map((layer, index) => <li key={index}>{JSON.stringify(layer)}</li>)}</ul> */}
    </div>
  );
};
