import { createTRPCRouter } from "./init";
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  user: userRouter,
  // post: postRouter,
});

export type AppRouter = typeof appRouter;
