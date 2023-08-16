"use client";

import { AddDefaultLayer } from "@ericsison/mapspot/components/features/add-default-layer/view/AddDefaultLayer";
import { useRouter } from "next/navigation";

export default function SetupMapbox() {
  const router = useRouter();
  return (
    <>
      Setup Mapbox
      <AddDefaultLayer />
      <button onClick={() => router.push("/mapspot")}>Go to map</button>
    </>
  );
}
