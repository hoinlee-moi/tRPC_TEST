import { z } from "zod";
import { procdure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const TESTDUMMY = [
  { title: "trpctest1", content: "dkfnekfndk" },
  { title: "trpctest2", content: "ttttest2" },
  { title: "trpctest3", content: "dkfnekfndk" },
];

export const postRouter = router({
  getPost: procdure.query(() => {
    return JSON.stringify(TESTDUMMY);
  }),
  addPost: procdure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation((opts) => {
      const { input } = opts;
      console.log(input);
      if (!input.title || !input.content) return;

      TESTDUMMY.push({ title: input.title, content: input.content });

      //  prisma.post.create({
      //   data: {
      //     title: input.title,
      //     content: input.content,
      //   },
      // });
      // TODO : Call prisma add user method
    }),
});
