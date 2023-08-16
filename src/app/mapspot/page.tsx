"use client";

import dynamic from "next/dynamic";

const MapSpotLoader = dynamic(
  () => import("@ericsison/mapspot/components/maps/mapspot").then((component) => component.MapSpot),
  {
    loading: () => <>Loading...</>,
    ssr: false,
  },
);

export default function MapSpotHome() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <MapSpotLoader />
    </main>
  );
}
