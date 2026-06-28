"use client";

import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchStreamLink } from "@trpc/client";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import superjson from "superjson";
import { type AppRouter } from "../server/routers/_app";
import { getQueryClient, getUrl } from "./query-client";

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

export const TRPCReactProvider = (
  props: Readonly<{
    children: React.ReactNode;
  }>,
) => {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>createTRPCClient<AppRouter>({
      links: [
        httpBatchStreamLink({
          transformer: superjson,
          url: getUrl(),
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {props.children}
      </TRPCProvider>
    </QueryClientProvider>
  );
};
