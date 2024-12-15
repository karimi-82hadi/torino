"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function TanstakQueryProvider({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default TanstakQueryProvider;
