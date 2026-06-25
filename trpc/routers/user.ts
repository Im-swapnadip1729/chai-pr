import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../init";

export const userRouter = createTRPCRouter({
  me: publicProcedure.query(({ ctx }) => {
    return ctx.user;
  }),

  updateName: protectedProcedure
    .input(z.object({ name: z.string().min(1).max(50) }))
    .mutation(async ({ input }) => {
      return { success: true, name: input.name };
    }),
});
