import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/trpc/router";
import { createTRPCContext } from "@/trpc/init";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
        console.error("tRPC error:", error);
      }
    },
  });

export { handler as GET, handler as POST };
