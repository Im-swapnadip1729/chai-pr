import { initTRPC, TRPCError } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";


export const createTRPCContext = cache(() => ({ prisma }));

type Context = {
  prisma: typeof prisma;
};

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(
  t.middleware(async ({ ctx, next }) => {
    const session = await auth.api.getSession();

    if (!session) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
      });
    }

    return next({
      ctx: {
        ...ctx,
        user: session.user,
      },
    });
  }),
);
