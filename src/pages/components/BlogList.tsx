import React from "react";
import { api } from "~/utils/api";
import Blog from "./Blog";

const BlogList = () => {
  const { data: blogs } = api.blog.every.useQuery();

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="flex gap-4">
        {blogs?.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
