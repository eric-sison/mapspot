"use client";

import { AddDefaultLayer } from "@ericsison/mapspot/components/features/AddDefaultLayer/view/AddDefaultLayer";
import { useMap } from "@ericsison/mapspot/components/maps/olm";
import { useRouter } from "next/navigation";

export default function SetupMapbox() {
  const router = useRouter();
  const { defaultLayers } = useMap();

  return (
    <>
      Setup Mapbox
      <AddDefaultLayer />
      <div className="flex items-center gap-2">
        <button onClick={() => console.log(defaultLayers)}>get default layers</button>
        <button onClick={() => router.push("/mapspot")}>Go to map</button>
      </div>
    </>
  );
}
