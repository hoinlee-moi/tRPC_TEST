"use client";

import { trpc } from "@/server/client";
import { FormEvent, useRef } from "react";

export default function Form() {
  const addPost = trpc.post.addPost.useMutation({
    onSettled: () => {},
  });
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLInputElement | null>(null);

  const submitHandle = (e: FormEvent) => {
    e.preventDefault();
    if (titleRef.current && contentRef.current) {
      const title = titleRef.current.value;
      const content = contentRef.current.value;
      addPost.mutate({ title, content });
    }
  };

  return (
    <form
      onSubmit={submitHandle}
      className="flex flex-col justify-center items-center mb-10 bg-slate-400 p-5 rounded shadow-sm"
    >
      <input
        type="text"
        ref={titleRef}
        className="p-3 outline-none  rounded mb-3 "
      />
      <input
        type="text"
        ref={contentRef}
        className="p-3 outline-none  rounded mb-3"
      />
      <button className="inline-block p-2 bg-purple-300 w-20 rounded">
        ADD
      </button>
    </form>
  );
}
