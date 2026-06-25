import "server-only";
import { cache } from "react";
import { createHydrationHelpers } from "@trpc/react-query/rsc"; 
import { createCallerFactory, createTRPCContext } from "./init";
import { appRouter } from "./router";
import { makeQueryClient } from "./query-client";

const createCaller = createCallerFactory(appRouter);

export const trpc = createCaller(createTRPCContext);

const getQueryClient = cache(makeQueryClient);

export const { HydrateClient, trpc: prefetch } = createHydrationHelpers<typeof appRouter>(
  createCaller(createTRPCContext),
  getQueryClient,
);
