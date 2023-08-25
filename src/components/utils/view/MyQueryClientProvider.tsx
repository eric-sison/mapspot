"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQueryClientDevTools } from "../hooks/useQueryClientDevToolsStore";

type QueryClientProps = {
  children: ReactNode;
};

const ReactQueryDevToolsProduction = dynamic(() =>
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

export const MyQueryClientProvider: FunctionComponent<QueryClientProps> = ({ children }) => {
  const { showDevTools, setShowDevTools } = useQueryClientDevTools();
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevTools((prev) => !prev);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {showDevTools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevToolsProduction />
        </React.Suspense>
      )}
      {children}
    </QueryClientProvider>
  );
};
