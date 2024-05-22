import { z } from "zod";
import { procdure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postRouter = router({
  getPost: procdure.query(async () => {
    return await prisma.post.findMany();
  }),
  addPost: procdure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      console.log(input);
      if (!input.title || !input.content) return;

      await prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
        },
      });
      // TODO : Call prisma add user method
    }),
});
