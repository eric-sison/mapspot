"use client";

import { useQueryClientDevTools } from "../hooks/store/use-query-client-dev-tools-store";

export default function Index() {
  const showDevTools = useQueryClientDevTools((state) => state.showDevTools);
  const setShowDevTools = useQueryClientDevTools((state) => state.setShowDevTools);

  return (
    <>
      <button onClick={() => setShowDevTools(!showDevTools)}>toggle dev tools on prod</button>
    </>
  );
}
