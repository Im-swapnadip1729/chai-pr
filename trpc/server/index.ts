import "server-only";
import { cache } from "react";
import { appRouter } from "./routers/_app";
import { makeQueryClient } from "../client/query-client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { createTRPCContext } from "./init";



const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});


