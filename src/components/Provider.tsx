'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();
export function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
