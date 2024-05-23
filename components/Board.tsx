"use client";

import { trpc } from "@/server/client";

export default function Board() {
  const posts = trpc.post.getPost.useQuery().data;

  return (
    <div>
      {posts?.map(({ title, createdAt, content }) => (
        <div
          key={createdAt}
          className="flex flex-col border border-solid border-blue-400 mb-3 p-2"
        >
          <h1 className="font-bold text-2xl mb-2">Title : {title}</h1>
          <p className="mb-4">{content}</p>
          <p className="text-slate-400">{createdAt}</p>
        </div>
      ))}
    </div>
  );
}
