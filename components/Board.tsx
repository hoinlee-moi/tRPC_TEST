"use client";

import { trpc } from "@/server/client";

export default function Board() {
  const res = trpc.post.getPost.useQuery().data;

  const posts = (res && JSON.parse(res)) || [];
  return (
    <div>
      {posts.map(({ title, content }: { title: string; content: string }) => (
        <div
          key={Math.random()}
          className="flex flex-col border border-solid border-blue-400 mb-3 p-2"
        >
          <h1 className="font-bold text-2xl mb-2">Title : {title}</h1>
          <p className="mb-4">{content}</p>
        </div>
      ))}
    </div>
  );
}
