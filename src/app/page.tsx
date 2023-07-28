"use client";

import dynamic from "next/dynamic";

const BasicMapLoader = dynamic(
  () => import("@ericsison/mapspot/components/maps/basic-map/view/BasicMap").then((component) => component.BasicMap),
  {
    loading: () => <>Loading...</>,
    ssr: false,
  },
);

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <BasicMapLoader />
    </main>
  );
}
