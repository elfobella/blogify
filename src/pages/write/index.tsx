import React, { FormEvent, useState } from "react";
import { api } from "~/utils/api";

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { mutate: createBlog } = api.blog.create.useMutation();

  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.ctrlKey && event.key === "s") {
  //     event.preventDefault();
  //     alert("saved"); // Prevent the default browser save dialog from showing
  //   }
  // };

  return (
    <div className="h-screen px-4 sm:px-6 md:px-8">
      <div className="flex">
        <div className="mx-auto flex max-w-3xl flex-1 flex-col gap-y-3 px-4 pt-20">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border-b border-secondary-200 pb-1 text-2xl font-medium outline-none placeholder:text-secondary-500"
          />
          <textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="resize-none text-lg outline-none"
          />
        </div>
        <div className="pt-4">
          <button
            onClick={() => createBlog({ title, description: desc })}
            className={`h-7 rounded-lg border border-secondary-200 px-3 text-sm font-medium shadow-sm transition-all hover:text-primary-500 hover:shadow-primary-500/30`}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
