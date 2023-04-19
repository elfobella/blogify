import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.blog.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  every: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.blog.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({ title: z.string().min(1), description: z.string().min(1) })
    )
    .mutation(async ({ ctx, input: { title, description } }) => {
      return await ctx.prisma.blog.create({
        data: {
          title,
          description,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
});
