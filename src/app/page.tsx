"use client";

import { useQueryClientDevTools } from "../components/utils/hooks/useQueryClientDevToolsStore";

export default function Index() {
  const showDevTools = useQueryClientDevTools((state) => state.showDevTools);
  const setShowDevTools = useQueryClientDevTools((state) => state.setShowDevTools);

  return (
    <>
      <button onClick={() => setShowDevTools(!showDevTools)}>toggle dev tools on prod</button>
    </>
  );
}
